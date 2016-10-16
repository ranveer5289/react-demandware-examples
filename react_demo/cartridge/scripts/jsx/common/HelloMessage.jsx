const isServerSide = typeof window === 'undefined';

if ( isServerSide )
{
	var React = require('react'); 
}
else
{
	var React = window.React;
	var ReactDOM = window.ReactDOM;
}

var HelloMessage = React.createClass( {

	getInitialState : function()
	{
		return { surname : 'raghuwanshi' };
	},

	handleClick : function()
	{
		alert( 'You clicked!' );
	},

	render : function()
	{
		return <div onClick={this.handleClick}>Hello {this.props.name}</div>;
	}
} );

if ( isServerSide )
{
	exports.HelloMessage = HelloMessage;
}
else
{
	ReactDOM.render( <HelloMessage name='Ranveer' />, document.getElementById( 'container' ) );
}
