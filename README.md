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

### Objects
```js
compare({a: 1}, {a: 1}) // => true
compare({a: 1}, {a: 2}) // => false
```
