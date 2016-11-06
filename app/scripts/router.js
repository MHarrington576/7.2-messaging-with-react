var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var LoginComponent = require('./components/login.jsx').LoginComponent;
var MessageComponent = require('./components/messageboard.jsx').MessageComponent;
var MessageCollection = require('./models/models').MessageCollection;

var AppRouter = Backbone.Router.extend({
// Instantiating the main router
  routes: {
    '': 'index',
    'messages/': 'messages'
  },
// Connecting URL fragments to rendering methods

  initialize: function(){
    this.username = '';
  },
// Leaves username field blank upon launch

  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),
// Assigns router to this to be passed down via props
      document.getElementById('app')
    );
  },
// Renders index to the DOM in '#app' by rendering JS/XML log-in screen

  messages: function(){
                            // var collection = new MessageCollection();
                            // collection.fetch();

// Instantiates the MessageCollection in the code and fetches for it
// new data from the server

    ReactDOM.render(
      React.createElement(MessageComponent, {username: this.username}),
      document.getElementById('app')
    );
  }
// Renders the messageboard to the DOM in '#app' by rendering XML
// for messageboard
});

var router = new AppRouter();
// Instantiates the main router to allow access in other files

module.exports = {
  router: router
};
