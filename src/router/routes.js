import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import WelcomeView from 'views/WelcomeView';

export const SiteRouter = () => (
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={WelcomeView} />
    </Route>
  </Router>
);

export default SiteRouter;
