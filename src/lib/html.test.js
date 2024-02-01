import { describe, expect, it } from '@jest/globals';
import { indexTemplate, stadaTemplate, template } from './html';

describe('html', () => {
  describe.only('template', () => {
    it('should return template with give title and body', () => {
      const result = template('title', 'body');
      expect(result).toContain('<title>title</title>');
    });
    it('should return template with give title and body', () => {
      const buttons = [{ title: 'Takki', html: 'hello.html' }];
      const result = indexTemplate('title', buttons);
      expect(result).toContain('<a href="hello.html">Takki</a>');
    });
    it('should return template with give title and body', () => {
      const data = [
        { team: 'Boltaliðið', score: 14 },
        { team: 'Óhemjurnar', score: 14 },
        { team: 'Vinningshópurinn', score: 13 },
      ];
      const result = stadaTemplate([], data);
      expect(result).toContain('<h2>Staðan í deildinni</h2>');
    });
  });
});
