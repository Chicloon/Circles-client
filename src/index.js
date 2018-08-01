import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader';

import stores from './stores';
import App from './App';

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider {...stores}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept(() => renderApp(App));
}
