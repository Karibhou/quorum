import { execFileSync } from 'node:child_process';
import process from 'node:process';

const { BASE_SHA, HEAD_SHA } = process.env;
if (!BASE_SHA || !HEAD_SHA)
  throw new Error('BASE_SHA and HEAD_SHA are required');

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' });
const commits = git('rev-list', `${BASE_SHA}..${HEAD_SHA}`)
  .trim()
  .split('\n')
  .filter(Boolean);
if (commits.length === 0) throw new Error('No commits found to check');

for (const commit of commits) {
  const email = git('show', '-s', '--format=%ae', commit).trim().toLowerCase();
  const message = git('show', '-s', '--format=%B', commit);
  const trailers = execFileSync('git', ['interpret-trailers', '--parse'], {
    input: message,
    encoding: 'utf8',
  });
  const signed = trailers.split('\n').some((trailer) => {
    const match = /^signed-off-by:\s+.+\s+<([^<>]+)>\s*$/i.exec(trailer);
    return match?.[1]?.toLowerCase() === email;
  });
  if (!signed)
    throw new Error(
      `Commit ${commit} lacks a sign-off matching author ${email}`,
    );
}
process.stdout.write(
  `DCO sign-offs verified for ${commits.length} commit(s)\n`,
);
