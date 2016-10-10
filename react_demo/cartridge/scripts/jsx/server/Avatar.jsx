const React = require('~/cartridge/scripts/react/lib/React.js');
var Avatar = React.createClass({
	render() {
		return (
			<div>
				<PagePic pagename={this.props.pagename} />
				<PageLink pagename={this.props.pagename} />
			</div>
		);
	}
})

var PagePic = React.createClass({
	render() {
		return (
			<img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
		);
	}
})

var PageLink = React.createClass({
	render() {
		return (
			<a href={'https://www.facebook.com/' + this.props.pagename}>
				{this.props.pagename}
			</a>
		);
	}
})

exports.Avatar = Avatar
