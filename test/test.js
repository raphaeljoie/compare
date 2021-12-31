import { assert } from 'chai';
import { compare } from '../src/main.js';

describe('compare()', () => {
  it('should return true for same integers', () => {
    assert.isOk(compare(1, 1));
  });
  it('should return false for non equal integers', () => {
    assert.isNotOk(compare(2, 1));
  });
});
