# nicedate

display nicely, but tersely formatted dates.

## example

``` js
var nicedate = require('nicedate')

console.log(nicedate(Date.now()))
// just now

//one second ago
console.log(nicedate(Date.now() - 1000))
// 1s

//one week ago
console.log(nicedate(Date.now() - 1000*60*24*7))
// 1w

//etc...

// locales
console.log(nicedate(Date.now() - 1000, true, 'zh'))
// 1秒前
```

current locales: en (default) and zh

## License

MIT
