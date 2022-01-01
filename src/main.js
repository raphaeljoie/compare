const toString = Object.prototype.toString;

const isNumber = (x) => toString.call(x) === '[object Number]';

export function ekwal(x, y) {
  // don't return true for +0 and -0 because 1/0 and 1/-0 are not the same!
  if (x === y && x !== 0) return true;

  if (isNumber(x)){
    // NB NaN !== NaN: the only number not equal to themselves
    if (x) return x === y // numbers other than +/-0 and NaN can be compared normally
    if (x === x) return 1/x === 1/y; // x is not NaN => it's +/-0
    return y !== y // x is NaN
  }

  return false;
}
