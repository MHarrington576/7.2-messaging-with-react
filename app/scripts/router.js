var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/': 'messages'
  },
  initialize: function(){
    this.username = '';
  },
  index: function(){
    ReactDOM.render(
      React.createElement(LoginComponent, {router: this}),
      document.getElementById('app')
    );
  },
  messages: function(){
    var collection = new MessagesCollection();
    collection.fetch();

    ReactDOM.render(
      React.createElement(MessageBoardComponent, {collection: collection, username: this.username}),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
