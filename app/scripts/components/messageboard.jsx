var React = require('react');
var Backbone = require('backbone');

var MessageCollection = require('../models/models').MessageCollection;
var TemplateComponent = require('./template.jsx').TemplateComponent;

var MessageForm = React.createClass({
  getInitialState: function(){
    return {
      content: '',
      username: ''
    };
  },

  handleMessage: function(e){
    var message = e.target.value;
    this.setState({message: message});
  },

  handleSubmit: function(e){
    e.preventDefault();

    var timeStamp = {
      content: this.state.message,
      time: new Date().getTime(),
      username: this.props.username
    };

    this.getCollection().create(timeStamp);
    this.setState({message: ''});
  },

  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleMessage} type="text" name="message" value={this.state.message} placeholder="Your message" />
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    )
  }
});

var MessageBoard = React.createClass({
  render: function(){
    var collection = this.getCollection();
    var listOfMessages = collection.map(function(messages){
      return <li key={message.get('_id') || message.cid}>
        {messages.get('username')}
        {messages.get('message')}
        {messages.get('time')}
      </li>;
    });

    return (
      <ul>
        {listOfMessages}
      </ul>
    );
  }
});

var MessageComponent = React.createClass({
  getDefaultProps: function(){
    var collection = new MessageCollection();
    return {
      collection: collection
    };
  },

  componentWillMount: function(){
    var self = this;
    self.props.collection.fetch();
    setInterval(function(){
      self.props.collection.fetch();
    }, 5000);
  },

  render: function(){
    return (
      <TemplateComponent>
        <MessageBoard />
        <MessageForm username={this.props.username} />
      </TemplateComponent>
    )
  }
});

module.exports = {
  MessageForm: MessageForm,
  MessageBoard: MessageBoard,
  MessageComponent: MessageComponent
}
