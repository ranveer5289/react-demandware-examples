const isServerSide = typeof window === 'undefined';

if ( isServerSide )
{
	var React = require( '~/cartridge/scripts/react/lib/React.js' );
}
else
{
	var React = window.React;
	var ReactDOM = window.ReactDOM;
}

var Item = React.createClass( {
	getInitialState : function()
	{
		return {
			count : this.props.initialCount
		};
	},

	_increment : function()
	{
		this.setState( { count : this.state.count + 1 } );
	},

	render : function()
	{
		return <div onClick={this._increment}>
			{this.state.count}
		</div>;
	}
} );

if ( isServerSide )
{
	exports.Item = Item;
}
else
{
	ReactDOM.render( <Item initialCount={7} />, document.getElementById( 'container' ) );
}
