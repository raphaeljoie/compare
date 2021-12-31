export function compare(x, y) {
  if (x === y) return true;

  if (Number.isNaN(x) && Number.isNaN(y) && typeof x === 'number' && typeof y === 'number') {
    return true;
  }

  return false;
}
