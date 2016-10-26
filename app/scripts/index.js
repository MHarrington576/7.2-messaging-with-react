var $ = require('jquery');
var Backbone = require('backbone');
require('./router');

// Waiting for DOM to be ready before loading components
$(function(){
  Backbone.history.start();
// Opens main valve; starts up router
});
