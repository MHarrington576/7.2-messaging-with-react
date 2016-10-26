var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
}
