var guard = require( 'app_storefront_controllers/cartridge/scripts/guard.js' );
var response = require('app_storefront_controllers/cartridge/scripts/util/Response');

exports.Demo = guard.ensure( ['get'], demoReact );
exports.Demo1 = guard.ensure( ['get'], demoReact1 );
exports.Demo2 = guard.ensure( ['get'], demoReact2 );
exports.Demo3 = guard.ensure( ['get'], demoReact3 );
exports.FetchComments = guard.ensure( ['get'], fetchComments );
exports.SaveComment = guard.ensure( ['post'], saveComment );

const React = require( 'react' );
const ReactServer = require( 'react-dom-server' );
const Redux = require( 'redux' );
const ReactRedux = require( '~/cartridge/scripts/react-redux/lib/ReactRedux.js' );

const ISML = require( 'dw/template/ISML' );
const URLUtils = require( 'dw/web/URLUtils' );
const CustomObjectMgr = require( 'dw/object/CustomObjectMgr' );

function demoReact()
{
	const Component = require( '~/cartridge/static/default/react/components/HelloMessage.js' );
	const Hello = React.createFactory( Component.HelloMessage );
	var defaultState = {
			  todo: {
				    items: ["1"]
				  }
				};

	function todoApp(state, action) {
	}
	const store = Redux.createStore(todoApp, defaultState);
	const preloadedState = store.getState()



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
