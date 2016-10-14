const isServerSide = typeof window === 'undefined';

if (isServerSide) {
	var React = require('~/cartridge/scripts/react/lib/React.js');
} else {
	var React = window.React;
	var ReactDOM = window.ReactDOM;
}

var CommentBox = React.createClass({

	loadCommentsFromServer: function () {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,

			success: function (data) {
				this.setState({ data: data });
			}.bind(this),

			error: function (xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	getInitialState: function () {
		return { data: [] };
	},

	componentDidMount: function () {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},

	handleCommentSubmit: function (comment) {
		$.ajax({
			url: this.props.saveUrl,
			dataType: 'json',
			type: 'POST',
			data: comment,

			success: function (data) {
				this.setState({ data: data });
			}.bind(this),

			error: function (xhr, status, err) {
				console.error(this.props.saveUrl, status, err.toString());
			}.bind(this)
		});
	},

	render: function () {
		return React.createElement(
			'div',
			{ className: 'commentBox' },
			React.createElement(
				'h1',
				null,
				'Comments'
			),
			React.createElement(CommentList, { data: this.state.data }),
			React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
		);
	}
});

var CommentList = React.createClass({
	render: function () {
		var commentNodes = this.props.data.map(function (comment) {
			return React.createElement(
				Comment,
				{ author: comment.author, key: comment.id },
				comment.text
			);
		});

		return React.createElement(
			'div',
			{ className: 'commentList' },
			commentNodes
		);
	}
});

var CommentForm = React.createClass({

	getInitialState: function () {
		return { author: '', text: '' };
	},

	handleAuthorChange: function (e) {
		this.setState({ author: e.target.value });
	},

	handleTextChange: function (e) {
		this.setState({ text: e.target.value });
	},

	handleSubmit: function (e) {
		e.preventDefault();
		const author = this.state.author.trim();
		const text = this.state.text.trim();
		if (!author || !text) {
			return;
		}
		this.props.onCommentSubmit({ author: author, text: text });
		this.setState({ author: '', text: '' });
	},

	render: function () {
		return React.createElement(
			'form',
			{ className: 'commentForm', onSubmit: this.handleSubmit },
			React.createElement('input', { type: 'text',
				placeholder: 'Your name',
				value: this.state.author,
				onChange: this.handleAuthorChange
			}),
			React.createElement('input', { type: 'text',
				placeholder: 'Say something...',
				value: this.state.text,
				onChange: this.handleTextChange
			}),
			React.createElement('input', { type: 'submit', value: 'Post' })
		);
	}
});

var Comment = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			{ className: 'comment' },
			React.createElement(
				'h2',
				{ className: 'commentAuthor' },
				this.props.author
			),
			this.props.children.toString()
		);
	}
});

if (isServerSide) {
	exports.CommentBox = CommentBox;
} else {
	ReactDOM.render(React.createElement(CommentBox, { url: window.Urls.FETCH_COMMENT, saveUrl: window.Urls.SAVE_COMMENT, pollInterval: 10000 }), document.getElementById('content'));
}