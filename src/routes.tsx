import { Switch, Route } from 'react-router-dom';
import { Dashboad } from './pages/Dashboard';


const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboad} />
    </Switch>
  );
};

export default Routes;
