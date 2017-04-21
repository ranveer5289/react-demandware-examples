const isServerSide = typeof window === 'undefined';

if (isServerSide) {
  var React = require('react');
  var ReactRouter = require('react-router');
} else {
  var React = window.React;
  var ReactRouter = window.ReactRouter;
}

var Link = ReactRouter.Link;

const Index = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement('hr', null),
      React.createElement(
        'div',
        { className: 'jumbotron' },
        React.createElement(
          'p',
          null,
          React.createElement(
            'strong',
            null,
            'This is the example'
          )
        ),
        React.createElement(
          'ol',
          { className: 'lead' },
          React.createElement(
            'li',
            null,
            React.createElement(
              Link,
              { to: '/react/signup' },
              'Registration'
            )
          ),
          React.createElement(
            'li',
            null,
            React.createElement(
              Link,
              { to: '/react/login' },
              'Login'
            )
          )
        )
      )
    );
  }
});

exports.Index = Index;