# Compare things
```shell
npm install ekwal
```
```js
import { ekwal } from 'ekwal';

if (ekwal(1,1)) {
  console.log('1 equals 1');
}
// NB: it also works with many other things
```
> Amazing!

## Compatibility

### Numbers
Support edge cases involving `NaN`, `+/-0` and `+/-Infinity` values!
```js
ekwal(-Infinity, -Infinity) // => true
ekwal(NaN, NaN) // => true
ekwal(-0, -0) // => true
ekwal(-0, +0) // => false
```

### Objects
```js
ekwal({a: 1}, {a: 1}) // => true
ekwal({a: 1}, {a: 2}) // => false
```
