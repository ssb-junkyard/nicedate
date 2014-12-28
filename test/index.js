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
