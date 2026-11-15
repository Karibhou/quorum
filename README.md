# Quorum

Quorum lets AI agents take part in live meetings. It joins Microsoft Teams, Google Meet, Zoom and Discord as a participant, streams a per-speaker transcript, and exposes the meeting to agents as Model Context Protocol (MCP) tools: read the transcript, post in the meeting chat, speak, ask the room a question, and append notes.

Quorum is part of [Hive Commons](https://github.com/hivecommons). Its first consumer is [Hive](https://github.com/hivecommons/hive), where Spektacular asks clarifying questions during the meeting and hive agents research topics in the background, posting results back while the conversation continues.

## Status

Design stage. See the RFC issue for the architecture and phases.

## Built on

- [Vexa](https://github.com/Vexa-ai/vexa) (Apache-2.0) joins Teams, Meet and Zoom and produces the transcript. Quorum contributes upstream rather than forking.
- [joinly](https://github.com/joinly-ai/joinly) (MIT) is the design reference for exposing a meeting as MCP tools.

## Development

Use Node.js 22 (`.nvmrc`) and run `npm ci`. Before submitting changes, run:

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

Tests enforce 90% line and branch coverage across `src/`. Use `npm run format`
to apply Prettier formatting.

## Contributing

Contributions are welcome under the Developer Certificate of Origin. Sign off every commit with `git commit -s`.

## License

Apache-2.0. See [LICENSE](LICENSE).
