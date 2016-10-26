var Backbone = require('backbone');

var Message = Backbone.Model.extend({
// Creates model for a single message
  idAttribute: '_id',
// Signifies that the ID of the message will be defined by '_id'
  defaults: {
    visible: true
  }
// Default for the sake of defaults
});

var MessageCollection = Backbone.Collection.extend({
// Creates collection of messages to make up messageboard
  model: Message,
// Collection will be filled with Message models
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/mdhmessages',
// Server endpoint for message data collection and subsequent fetching
  comparator: function(model){
    console.log(model.timestamp);
    return model.timestamp;
  }
// Compares timestamp data across all stored messages and returns
// the messages organized by those timestamps
});

module.exports = {
  Message: Message,
  MessageCollection: MessageCollection
};
