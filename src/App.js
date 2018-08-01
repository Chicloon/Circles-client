import React from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// import PrivateRoute from './containers/PrivateRoute';
// import LoginContainer from './containers/LoginContainer'
// import MenuContainer from './containers/MenuContainer'
// import ProfileContainer from './containers/ProfileContainer'
// import NewsContainer from './containers/NewsContainer'
import NotFound from './components/NotFound';

import * as c from './components';

// import './App.css';

// import CssBaseline from 'material-ui/CssBaseline'

@inject('store')
@observer
class App extends React.Component {
  render() {
    const {
      store: { isAuthorized },
    } = this.props;
    // console.log(store);
    // console.log('isAuthorized', store.isAuthorized);
    // const { isAuthorized } = store;
    return (
      <Router>
        {isAuthorized ? (
          <Switch>
            {/* <Redirect exact from="/" to="/login" /> */}
            <Route exact path="/" component={c.News} />

            {/* <PrivateRoute path="/profile" component={ProfileContainer} /> */}
            <Route component={NotFound} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={c.Login} />
            <Route exact path="/signup" component={c.Signup} />
          </Switch>
        )}
      </Router>
    );
  }
}

export default App;
