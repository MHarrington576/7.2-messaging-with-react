var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    username: ''
  }
});

var Message = Backbone.Model.extend({
  idAttribute: '_id'
});

var MessageCollection = Backbone.Collection.extend({
  model: Message,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages',
  comparator: function(message){
    return message.get('time');
  }
});

module.exports = {
  User: User,
  Message: Message,
  MessageCollection: MessageCollection
};
