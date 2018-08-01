import React from 'react';
import { observer, inject } from 'mobx-react';
import LoginForm from './LoginForm';

@inject('store')
@observer
class Login extends React.Component {
  authorize = userId => this.props.store.authorize(userId);
  login = values => this.props.store.login(values);

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <LoginForm login={this.login} authorize={this.authorize} />
      </React.Fragment>
    );
  }
}

export default Login;
