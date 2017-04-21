var guard = require( 'new_sg_controllers/cartridge/scripts/guard.js' );
var response = require('new_sg_controllers/cartridge/scripts/util/Response');

exports.Demo = guard.ensure( ['get'], demoReact );
exports.Demo1 = guard.ensure( ['get'], demoReact1 );
exports.Demo2 = guard.ensure( ['get'], demoReact2 );
exports.Demo3 = guard.ensure( ['get'], demoReact3 );
exports.Demo4 = guard.ensure( ['get'], demoReact4 );
exports.Demo5 = guard.ensure( ['get'], demoReact5 );
exports.Login = guard.ensure( ['get'], demoReact5 );
exports.SignUp = guard.ensure( ['get'], demoReact5 );
exports.Demo5 = guard.ensure( ['get'], demoReact5 );
exports.FetchComments = guard.ensure( ['get'], fetchComments );
exports.SaveComment = guard.ensure( ['post'], saveComment );

const React = require( 'react' );
const ReactServer = require( 'react-dom-server' );
const ReactRouter = require( 'react-router' );
const ISML = require( 'dw/template/ISML' );
const URLUtils = require( 'dw/web/URLUtils' );
const CustomObjectMgr = require( 'dw/object/CustomObjectMgr' );

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
	const Avatar = React.createFactory( Component.Avatar );

	const props = { pagename : 'Engineering' };
	const html = ReactServer.renderToString( Avatar( props ) );

	ISML.renderTemplate( '/react/demo2', { markup : html } );

}

function demoReact3()
{
	const URLS = {};
	URLS.FETCH_COMMENT = URLUtils.https( 'React-FetchComments' ).toString();
	URLS.SAVE_COMMENT = URLUtils.https( 'React-SaveComment' ).toString();

	const Component = require( '~/cartridge/static/default/react/components/CommentBox.js' );
	const CommentBox = React.createFactory( Component.CommentBox );
	const html = ReactServer.renderToString( CommentBox() );

	const viewInput = {
		markup : html,
		URLS : URLS
	}

	ISML.renderTemplate( '/react/index', viewInput );
}

function demoReact4()
{

	const match = ReactRouter.match;
	const RouterContext = ReactRouter.RouterContext;
	const location = request.httpHeaders['x-is-path_info'];
	const routes = require( '~/cartridge/static/default/react/components/Route.js' ).MyRoutes;

	match({routes:routes, location:location}, function( error, redirectLocation, renderProps ) {

		const Routes = React.createElement( RouterContext,  renderProps);
		const html = ReactServer.renderToString(Routes);

		const viewInput = {
			markup : html
		}

		ISML.renderTemplate( '/react/demo4', viewInput );

	})
}

function demoReact5()
{
	const match = ReactRouter.match;
	const RouterContext = ReactRouter.RouterContext;
	const location = request.httpHeaders['x-is-path_info'];
	const routes = require( '~/cartridge/static/default/react/components/Master.js' ).MyRoutes;

	match({routes:routes, location:location}, function( error, redirectLocation, renderProps ) {

		const Routes = React.createElement( RouterContext,  renderProps);
		const html = ReactServer.renderToString(Routes);

		const viewInput = {
			markup : html
		}

		ISML.renderTemplate( '/react/demo5', viewInput );

	})
}

function fetchComments()
{
	const CO = CustomObjectMgr.getCustomObject( 'Comment', 'comment-react' );
	const commentsData = CO.custom.commentsJSON;

	response.renderJSON(JSON.parse(commentsData));
}

function saveComment()
{
	const author = request.httpParameterMap.get('author').getStringValue();
	const text = request.httpParameterMap.get('text').getStringValue();

	const newComment = {
		id : Date.now(),
		author : author,
		text : text
	}

	const CO = CustomObjectMgr.getCustomObject( 'Comment', 'comment-react' );
	const commentsData = JSON.parse( CO.custom.commentsJSON ) || [];

	//Modify & save comment
	commentsData.push(newComment);
	dw.system.Transaction.wrap( function()
	{
		CO.custom.commentsJSON = JSON.stringify(commentsData);
	} );

	//return updated comments array
	response.renderJSON(commentsData);
}
