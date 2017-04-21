const isServerSide = typeof window === 'undefined';

if ( isServerSide )
{
    var React = require( 'react' );
    var ReactRouter = require('react-router');
}
else
{
    var React = window.React;
    var ReactRouter = window.ReactRouter;
}

var Link  = ReactRouter.Link;

const Index = React.createClass( {
      render : function() {
            return (
              <div className="container">
                <hr />
                <div className="jumbotron">
                  <p>
                    <strong>This is the example</strong>
                  </p>
                  <ol className="lead">
                      <li><Link to="/react/signup">Registration</Link></li>
                      <li><Link to="/react/login">Login</Link></li>
                  </ol>
                </div>
              </div>
            )
        }
} );

exports.Index = Index