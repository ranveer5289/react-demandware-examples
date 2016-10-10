'use strict';

var React = require('~/cartridge/scripts/react/lib/React.js');
var Avatar = React.createClass({
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(PagePic, { pagename: this.props.pagename }),
			React.createElement(PageLink, { pagename: this.props.pagename })
		);
	}
});

var PagePic = React.createClass({
	render: function render() {
		return React.createElement('img', { src: 'https://graph.facebook.com/' + this.props.pagename + '/picture' });
	}
});

var PageLink = React.createClass({
	render: function render() {
		return React.createElement(
			'a',
			{ href: 'https://www.facebook.com/' + this.props.pagename },
			this.props.pagename
		);
	}
});

exports.Avatar = Avatar;