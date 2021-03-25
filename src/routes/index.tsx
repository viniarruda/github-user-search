import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../screens/Home';
import RepoDetails from '../screens/RepoDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/details" component={RepoDetails} />
    </Switch>
  </Router>
);

export default Routes;
