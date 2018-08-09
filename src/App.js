import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './styles/App.css';
import './styles/theme.css';
import './styles/font-awesome.css';

import * as p from './pages';
import MainLayout from './layouts/MainLayout';

const App = () => (
  <Router>
    <Switch>
      <MainLayout>
        <Route exact path="/" component={p.Home} />
        <Route exact path="/register" component={p.Register} />
        <Route exact path="/ready" component={p.Ready} />
        <Route exact path="/video" component={p.Video} />
      </MainLayout>
      {/* <Route component={p.NotFound} /> */}
    </Switch>
  </Router>
);

export default App;
