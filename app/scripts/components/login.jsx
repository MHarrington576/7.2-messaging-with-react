var Backbone = require('backbone');
var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

function Directions(){
  return <span>Please log in to join the TIY-GVL-FEE message board!</span>
}
// To be translated to XML; print directions to screen

var LoginForm = React.createClass({
// Defines how LoginForm looks and behaves below
  getInitialState: function(){
    return {
      username: ''
    };
// Sets the starting state of the username input field to an empty string
  },

  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
// Sets username state to user's exact input, character by character

  handleSubmit: function(e){
    e.preventDefault();
    var router = this.props.router

    router.username = this.state.username
// Maintains the user's input as username through navigation
    router.navigate('messages/', {trigger: true});
// Navigates the user to the 'messages/' fragment from the log-in screen
    this.setState({username: ''});
// Resets username input field to an empty string
  },

  render: function(){
    return (
// Defines what is to be rendered to the DOM
      <form className="login-form" onSubmit={this.handleSubmit}>
        <input onChange={this.handleUsername} type="text" name="username" value={this.state.username} placeholder="Username" />
        <br />
        <button type="submit" className="btn btn-success">Log in!</button>
      </form>
    )
  }
});

var LoginComponent = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <Directions />
        <LoginForm router={this.props.router} />
      </TemplateComponent>
    )
  }
// Render this whole chunk of XML to the DOM, including the LoginForm
// and Directions
});

module.exports = {
  LoginComponent: LoginComponent
};
