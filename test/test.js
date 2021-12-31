import { assert } from 'chai';
import { compare } from '../src/main.js';

describe('compare()', () => {
  it('should return true for same integers', () => {
    assert.isOk(compare(1, 1));
  });
  it('should return false for integer and same integer stringified', () => {
    assert.isNotOk(compare(1, "1"));
  });
  it('should return true for same boolean', () => {
    assert.isOk(compare(!0, !0));
  });
  it('should return true for both undefined', () => {
    assert.isOk(compare(void 0, void 0));
  });
  it('should return true for both null', () => {
    assert.isOk(compare(null, null));
  });
  it('should return false for null and undefined', () => {
    assert.isNotOk(compare(null, void 0));
  });
  it('should return false for non equal integers', () => {
    assert.isNotOk(compare(2, 1));
  });
  it('should return true for NaN comparison', () => {
    assert.isOk(compare(parseInt('blabetiblou'), NaN));
  });
  it('should return true for same strings', () => {
    assert.isOk(compare('blabetiblou', 'blabetiblou'));
  });
  it('should return false for distinct strings', () => {
    assert.isNotOk(compare('blabetiblou', 'blabetiblou2'));
  });
  it('should return true for int and float same value', () => {
    assert.isOk(compare(1, 1.0));
  });
});
