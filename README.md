# Compare things
```js
import compare from 'compare';

if (compare(1,1)) {
  console.log('1 equals 1');
}
// NB: it also works with many other things
```
> Amazing!

## Compatibility

### Numbers
Support edge cases involving `NaN`, `+/-0` and `+/-Infinity` values!
```js
compare(-Infinity, -Infinity) // => true
compare(NaN, NaN) // => true
compare(-0, -0) // => true
compare(-0, +0) // => false
```

### Objects
```js
compare({a: 1}, {a: 1}) // => true
compare({a: 1}, {a: 2}) // => false
```
