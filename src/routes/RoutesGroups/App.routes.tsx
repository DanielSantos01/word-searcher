import React from 'react';
import {
  Switch,
  RouteProps,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';

import Entry from '@screens/Entry';
import Route from '../components/Route';

const AppRoutes: React.FC<RouteProps> = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/`} component={Entry} />
      <Redirect to={`${path}/`} />
    </Switch>
  );
};

export default AppRoutes;
