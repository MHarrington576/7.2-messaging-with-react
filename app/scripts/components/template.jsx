var React = require('react');

var TemplateComponent = React.createClass({
  render: function(){
    return (
      <div>

        <h1>TIY Greenville FEE Messageboard</h1>
        <h2>Fall 2016</h2>

        <div>
          {this.props.children}
        </div>

      </div>
    );
  }
});

module.exports = {
  TemplateComponent: TemplateComponent
};
