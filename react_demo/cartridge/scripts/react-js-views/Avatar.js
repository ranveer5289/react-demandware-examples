const React = require('react');
var Avatar = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(PagePic, { pagename: this.props.pagename }),
			React.createElement(PageLink, { pagename: this.props.pagename })
		);
	}
});

var PagePic = React.createClass({
	render: function () {
		return React.createElement('img', { src: 'https://graph.facebook.com/' + this.props.pagename + '/picture' });
	}
});

var PageLink = React.createClass({
	render: function () {
		return React.createElement(
			'a',
			{ href: 'https://www.facebook.com/' + this.props.pagename },
			this.props.pagename
		);
	}
});

exports.Avatar = Avatar;