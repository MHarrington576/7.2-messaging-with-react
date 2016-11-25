// Third-party dependencies
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

// Local dependencies
var User = require('./models/models').User;
var MessageCollection = require('./models/models').MessageCollection;
var LoginComponent = require('./components/login.jsx').LoginComponent;
var MessageboardComponent = require('./components/messageboard.jsx').MessageboardComponent;
var currentUser;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/': 'messages'
  },
  // Connecting URL fragments to rendering methods

  initialize: function(){
    var currentUser = this.currentUser = new User();
  },

  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {currentUser: this.currentUser}),
      document.getElementById('app')
    );
  },

  messages: function(){
    ReactDOM.render(
      React.createElement(MessageboardComponent, {currentUser: this.currentUser}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router,
  currentUser: currentUser
};
