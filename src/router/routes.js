import React from 'react';

import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import rootStore from '../redux/rootStore'
import WelcomeView from 'views/WelcomeView';

export const SiteRouter = () => (
  <Provider store={rootStore}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={WelcomeView} />
      </Route>
    </Router>
  </Provider>
);

export default SiteRouter;
