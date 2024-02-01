import { describe, expect, it } from '@jest/globals';
import { indexTemplate } from './html';

describe('html', () => {
  describe.only('indexTemplate', () => {
    it('should have a test', () => {
      expect(indexTemplate()).toBe(
        '<!doctype html><html lang="is"><head><meta charset="utf-8"><title>undefined</title><link rel="stylesheet" href="./public/styles.css"><script type="module" src="./public/scripts.js"></script></head><body>[object Object]</body></html>',
      );
    });
  });
});
