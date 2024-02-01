import { describe, expect, it } from '@jest/globals';
import { indexTemplate } from './html';

describe('html', () => {
  describe.only('indexTemplate', () => {
    it('should return template with give title and body', () => {
      const result = indexTemplate('title', 'body');
      expect(result).toContain('<title>title<title>');
    });
  });
});
