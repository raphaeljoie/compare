import { assert } from 'chai';
import { ekwal } from '../src/main.js';

describe('ekwal()', () => {
  it('should return true for same integers', () => {
    assert.isOk(ekwal(1, 1));
  });
  it('should return true for int and float same value', () => {
    assert.isOk(ekwal(1, 1.0));
  });
  it('should return false for non equal integers', () => {
    assert.isNotOk(ekwal(2, 1));
  });
  it('should return false for minus and positive zeros', () => {
    assert.isNotOk(ekwal(-0, +0));
  });
  it('should return true double positive zero', () => {
    assert.isOk(ekwal(+0, +0));
  });
  it('should return true for double minus zero', () => {
    assert.isOk(ekwal(-0, -0));
  });
  it('should return true for double minus infinity', () => {
    assert.isOk(ekwal(1/-0, 1/-0));
  });
  it('should return true for double NaN', () => {
    assert.isOk(ekwal(parseInt('blabetiblou'), parseInt('blabetiblou')));
  })
  it('should return false for plus and minus infinity', () => {
    assert.isNotOk(ekwal(1/-0, 1/+0));
  })
  it('should return false for minus infinity and minus zero', () => {
    assert.isNotOk(ekwal(1/-0, -0));
  })
  it('should return false for minus infinity and NaN', () => {
    assert.isNotOk(ekwal(1/-0, parseInt('blabetiblou')));
  })
  it('should return true for double infinity', () => {
    assert.isOk(ekwal(1/0, 1/0));
  });
  it('should return false for integer and same integer stringified', () => {
    assert.isNotOk(ekwal(1, "1"));
  });
  it('should return true for same boolean', () => {
    assert.isOk(ekwal(!0, !0));
  });
  it('should return true for both undefined', () => {
    assert.isOk(ekwal(void 0, void 0));
  });
  it('should return true for both null', () => {
    assert.isOk(ekwal(null, null));
  });
  it('should return false for null and undefined', () => {
    assert.isNotOk(ekwal(null, void 0));
  });
  it('should return true for NaN comparison', () => {
    assert.isOk(ekwal(parseInt('blabetiblou'), NaN));
  });
  it('should return true for same strings', () => {
    assert.isOk(ekwal('blabetiblou', 'blabetiblou'));
  });
  it('should return false for distinct strings', () => {
    assert.isNotOk(ekwal('blabetiblou', 'blabetiblou2'));
  });
});
