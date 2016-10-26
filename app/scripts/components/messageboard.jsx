var React = require('react');
var Backbone = require('backbone');
require('backbone-react-component');

var MessageCollection = require('../models/models').MessageCollection;
var TemplateCollection = require('./template.jsx').TemplateComponent;

var MessageForm = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  getInitialState: function(){
    return {
      message: ''
    };
  },

  handleMessage: function(e){
    var message= e.target.value;
    this.setState({message: message});
  },

  handleSubmit: function(e){
    e.preventDefault();
    this.getCollection().create({message: this.state.message});
    this.setState({message: ''});
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleMessage} name="message" value={this.state.message} placeholder="Your message" />
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    )
  }
});

var MessageBoard = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    var collection = this.getCollection();
    var listOfMessages = collection.map(function(message){
      return <li key={message.get('_id') || message.cid}>{message.get('message')}</li>;
    });

    return (
      <ul>
        {listOfMessages}
      </ul>
    );
  }
});

var MessageComponent = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function(){
    return (
      <TemplateComponent>
        <h2>Your Message</h2>
        <MessageForm />
        <MessageBoard />
      </TemplateComponent>
    )
  }
});

module.exports = {
  MessageComponent: MessageComponent
}
