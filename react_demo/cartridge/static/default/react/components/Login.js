const isServerSide = typeof window === 'undefined';

if (isServerSide) {
  var React = require('react');
} else {
  var React = window.React;
}

const Login = React.createClass({
  render: function () {
    return React.createElement(
      'div',
      { className: 'sp-login-form' },
      React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'col-xs-12' },
          React.createElement(
            'div',
            { className: 'form-horizontal' },
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'label',
                { htmlFor: 'email', className: 'col-xs-12 col-sm-4 control-label' },
                'Email'
              ),
              React.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4' },
                React.createElement('input', { type: 'text', className: 'form-control', id: 'email', name: 'email', placeholder: 'Email', required: true })
              )
            ),
            React.createElement(
              'div',
              { className: 'form-group' },
              React.createElement(
                'label',
                { htmlFor: 'password', className: 'col-xs-12 col-sm-4 control-label' },
                'Password'
              ),
              React.createElement(
                'div',
                { className: 'col-xs-12 col-sm-4' },
                React.createElement('input', { type: 'password', className: 'form-control', id: 'password', name: 'password', placeholder: 'Password', required: true })
              )
            ),
            React.createElement(
              'div',
              { key: 'register-button', className: 'form-group' },
              React.createElement(
                'div',
                { className: 'col-sm-offset-4 col-sm-4' },
                React.createElement(
                  'button',
                  { type: 'submit', className: 'btn btn-primary' },
                  'Login'
                )
              )
            )
          )
        )
      )
    );
  }
});

exports.Login = Login;