import './styles/App.css'
import './styles/theme.css'
import './styles/font-awesome.css'
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
// import PrivateRoute from './containers/PrivateRoute'
// import LoginContainer from './containers/LoginContainer'
// import MenuContainer from './containers/MenuContainer'
// import ProfileContainer from './containers/ProfileContainer'
// import NewsContainer from './containers/NewsContainer'
// import NotFound from './components/NotFound'

import * as p from './pages'

// import CssBaseline from 'material-ui/CssBaseline'

const App = () => (
  <div>
    <hr />
    <div className="content">
      <Switch>
        <Route exact path="/" component={p.Home} />
        <Route exact path="/register" component={p.Register} />
        {/* <Redirect exact from="/" to="/login" />
        <Route path="/news" component={NewsContainer} />
        <Route path="/login" component={LoginContainer} />
        <PrivateRoute path="/profile" component={ProfileContainer} />
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  </div>
)

export default App
