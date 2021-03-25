import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import RepoDetails from '../screens/RepoDetails';

import routes from './constants';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route path={routes.REPO_DETAILS} component={RepoDetails} />
    </Switch>
  </Router>
);

export default Routes;
