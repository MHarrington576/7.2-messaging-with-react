var $ = require('jquery');
var Backbone = require('backbone');
require('./router').router;

$(function(){
  Backbone.history.start();
});
