
;(function() {
  function createHandler(divisor,noun){
    return function(diff, useAgo){
      var n = Math.floor(diff/divisor);
      return "" + n + noun + ((useAgo) ? localeStrings.suffixAgo : '');
    }
  }

  var localeStrings;
  var formatters;

  module.exports = function (date, useAgo, locale) {
    var diff = ((Date.now() - +date) / 1000);
    locale = (locale || 'en').toLowerCase(); // default is 'en'
    try {
      localeStrings = require('./locales/nicedate.' + locale + '.js');
    } catch (e) {
      throw new Error("cannot find response locale:" + locale);
    }

    formatters = [
      { threshold: 1,        handler: function(){ return      localeStrings.justNow } },
      { threshold: 60,       handler: createHandler(1,        localeStrings.second) },
      { threshold: 3600,     handler: createHandler(60,       localeStrings.minute) },
      { threshold: 86400,    handler: createHandler(3600,     localeStrings.hour) },
      { threshold: 172800,   handler: function(){ return      localeStrings.yesterday } },
      { threshold: 604800,   handler: createHandler(86400,    localeStrings.day) },
      { threshold: 2592000,  handler: createHandler(604800,   localeStrings.week) },
      { threshold: 31536000, handler: createHandler(2592000,  localeStrings.month) },
      { threshold: Infinity, handler: createHandler(31536000, localeStrings.year) }
    ];

    for( var i=0; i<formatters.length; i++ ){
      if( diff < formatters[i].threshold ){
        return formatters[i].handler(diff, useAgo);
      }
    }
    throw new Error("exhausted all formatter options, none found"); //should never be reached
  }
})()

