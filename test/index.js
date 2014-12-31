var tape = require('tape')
var nicedate = require('../')


tape('now', function (t) {
  t.equal(nicedate(new Date()), 'just now')
  t.equal(nicedate(Date.now()), 'just now')

  t.equal(nicedate(Date.now() - 1000), '1s')
  t.equal(nicedate(Date.now() - 10*1000), '10s')
  t.equal(nicedate(Date.now() - 60000), '1m')
  t.equal(nicedate(Date.now() - 10*60000), '10m')
  t.equal(nicedate(Date.now() - 60*60000), '1h')
  t.equal(nicedate(Date.now() - 10*60*60000), '10h')
  t.equal(nicedate(Date.now() - 24*60*60000), 'yesterday')
  t.equal(nicedate(Date.now() - 10*24*60*60000), '1w')
  t.equal(nicedate(Date.now() - 32*24*60*60000), '1mo')
  t.equal(nicedate(Date.now() - 365*24*60*60000), '1y')

  t.end()
})

tape('cannot find response language test', function (t) {
  t.throws(function(){ nicedate(Date.now(), true, 'jpk');}, new RegExp('cannot find response locale'))

  t.end()
})

tape('zh locale test', function (t) {
  t.equal(nicedate(Date.now(), true, 'zh'), '刚刚')
  t.equal(nicedate(Date.now() - 1000, true, 'zh'), '1秒前')
  t.equal(nicedate(Date.now() - 10*1000, true, 'zh'), '10秒前')
  t.equal(nicedate(Date.now() - 60000, true, 'zh'), '1分钟前')
  t.equal(nicedate(Date.now() - 10*60000, true, 'zh'), '10分钟前')
  t.equal(nicedate(Date.now() - 60*60000, true, 'zh'), '1小时前')
  t.equal(nicedate(Date.now() - 10*60*60000, true, 'zh'), '10小时前')
  t.equal(nicedate(Date.now() - 24*60*60000, true, 'zh'), '昨天')
  t.equal(nicedate(Date.now() - 10*24*60*60000, true, 'zh'), '1周前')
  t.equal(nicedate(Date.now() - 32*24*60*60000, true, 'zh'), '1月前')
  t.equal(nicedate(Date.now() - 365*24*60*60000, true, 'zh'), '1年前')

  t.end()
})


