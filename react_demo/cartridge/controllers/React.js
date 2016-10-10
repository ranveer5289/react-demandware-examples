var guard = require( 'app_storefront_controllers/cartridge/scripts/guard.js' );

exports.Demo = guard.ensure( ['get'], demoReact );
exports.Demo1 = guard.ensure( ['get'], demoReact1 );
exports.Demo2 = guard.ensure( ['get'], demoReact2 );

const React = require( '~/cartridge/scripts/react/lib/React.js' );
const ReactServer = require( '~/cartridge/scripts/react/lib/ReactDOMServer.js' );
const ISML = require( 'dw/template/ISML' );

function demoReact()
{
	const Component = require( '~/cartridge/static/default/react/components/HelloMessage.js' );
	const Hello = React.createFactory( Component.HelloMessage );

	const props = { name : 'Ranveer' };
	const html = ReactServer.renderToString( Hello( props ) );

	ISML.renderTemplate( '/react/demo1', { markup :html } );
}

function demoReact1()
 {

	const Component = require( '~/cartridge/static/default/react/components/Item.js' );

	const Item = React.createFactory( Component.Item );

	const props = { initialCount : 7 };
	const html = ReactServer.renderToString( Item( props ) );

	ISML.renderTemplate( '/react/demo', { markup :html } );
}

function demoReact2()
{
	const Component = require( '~/cartridge/scripts/react-js-views/Avatar.js' );
	const Avatar = React.createFactory(Component.Avatar);

	const props = {pagename : "Engineering"};
	const html = ReactServer.renderToString(Avatar(props));

	ISML.renderTemplate('/react/demo2', {markup:html});

}
