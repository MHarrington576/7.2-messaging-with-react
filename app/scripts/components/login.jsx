var React = require('react');

function Directions(){
  return <span>Please log in to join the TIY-GVL-FEE message board!</span>
}
// To be translated to XML; print directions to screen

var LoginForm = React.createClass({
// Defines how LoginForm looks and behaves below
  getInitialState: function(e){
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
      <form onSubmit={this.handleSubmit}>
// When submitted, run the handleSubmit method
        <input onChange={this.handleUsername} name="username" value={this.state.username} placeholder="Username" />
// When the input in this field changes, run the handleSubmit method
// and set the state of the username to the user's input
        <button type="submit" className="btn btn-success">Log in!</button>
      </form>
    )
  }
});

var LoginComponent = React.createClass({
  render: function(){
    return (
      <TemplateComponent>
        <LoginForm router={this.props.router} />
// Sets the target router to the master AppRouter
        <Directions />
      </TemplateComponent>
    )
  }
// Render this whole chunk of XML to the DOM, including the LoginForm
// and Directions
});

module.exports = {
  LoginComponent: LoginComponent
};
