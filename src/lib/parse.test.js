import { describe, expect, it } from '@jest/globals';
import { isValidGame, parseTeamsJson } from './parse.js';

describe('parseTeamsJson', () => {
  it('should have a test', () => {
    expect(parseTeamsJson('{}')).toEqual({});
  });
});

describe('isValidGame', () => {
  it('should return false for a empty game data', async () => {
    const result = await isValidGame([], []);
    expect(result).toEqual(false);
  });
});
