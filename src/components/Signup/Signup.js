import React from 'react';
import { observer, inject } from 'mobx-react';
import SignupForm from './SignupForm';

@inject('store')
@observer
class Login extends React.Component {
  authorize = userId => this.props.store.authorize(userId);
  signup = values => this.props.store.signup(values);

  render() {
    return (
      <React.Fragment>
        <SignupForm signup={this.signup} authorize={this.authorize} />
      </React.Fragment>
    );
  }
}

export default Login;
