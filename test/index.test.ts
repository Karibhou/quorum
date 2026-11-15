import { describe, expect, it } from 'vitest';
import { CONTRACT_VERSION } from '../src/index.js';

describe('contract version', () => {
  it('identifies the documented cross-component contract', () => {
    expect(CONTRACT_VERSION).toBe('quorum.contract/v1');
  });
});
