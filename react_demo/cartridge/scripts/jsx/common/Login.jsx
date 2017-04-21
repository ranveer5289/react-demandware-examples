const isServerSide = typeof window === 'undefined';

if ( isServerSide )
{
    var React = require( 'react' );
}
else
{
    var React = window.React;
}

const Login = React.createClass( {
      render : function() {
            return (
            <div className='sp-login-form'>
              <div className="row">
                <div className="col-xs-12">
                  <div className="form-horizontal">

                    <div className="form-group">
                      <label htmlFor="email" className="col-xs-12 col-sm-4 control-label">Email</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" required={ true } />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="col-xs-12 col-sm-4 control-label">Password</label>
                      <div className="col-xs-12 col-sm-4">
                        <input type="password" className="form-control" id="password" name="password" placeholder="Password" required={ true } />
                      </div>
                    </div>

                    <div key="register-button" className="form-group">
                      <div className="col-sm-offset-4 col-sm-4">
                        <button type="submit" className="btn btn-primary">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
        }
} );

exports.Login = Login