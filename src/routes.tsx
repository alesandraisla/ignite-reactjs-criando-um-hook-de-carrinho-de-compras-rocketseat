import { Switch, Route } from 'react-router-dom';


const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default Routes;
