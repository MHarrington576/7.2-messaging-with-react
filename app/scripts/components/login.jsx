var Backbone = require('backbone');
var React = require('react');

var TemplateComponent = require('./template.jsx').TemplateComponent;

var LoginComponent = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    };
  },
  handleChange: function(e){
    e.preventDefault();
    var inputData = e.target.value;
    this.setState({username: inputData});
  },
  updateCurrentUser: function(e){
    e.preventDefault();

    var currentUserName = this.state.username;
    this.props.currentUser.set({username: currentUserName});
    sessionStorage.setItem('username', this.state.username);
    Backbone.history.navigate('messages/', {trigger: true});
  },
  render: function(){
    return(
      <div className="container-fluid">
        <TemplateComponent>
          <div className="row">
            <form className="form-inline col-md-6 col-md-offset-3" onSubmit={this.updateCurrentUser}>
              <div className="form-group username-login-container">
                <input type="text" onChange={this.handleChange} ref="username" className="form-control" name="username" id="username-input" placeholder="Enter your username" required="required"/>
                <button type="submit" className="btn btn-success">Begin messaging</button>
              </div>
            </form>
          </div>
        </TemplateComponent>
      </div>
    );
  }
});

module.exports = {
  LoginComponent: LoginComponent
};
