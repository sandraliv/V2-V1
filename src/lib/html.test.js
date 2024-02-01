import { describe, expect, it } from '@jest/globals';
import { template } from './html';

describe('html', () => {
  describe.only('indexTemplate', () => {
    it('should return template with give title and body', () => {
      const result = template('title', 'body');
      expect(result).toContain('<title>title</title>');
    });
  });
});
