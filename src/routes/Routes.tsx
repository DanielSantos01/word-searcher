import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './components/Route';
import { AppRoutes } from './RoutesGroups';

const Routes: React.FC = () => (
  <>
    <Switch>
      <Route path="/app" component={AppRoutes} />
    </Switch>
  </>
);

export default Routes;
