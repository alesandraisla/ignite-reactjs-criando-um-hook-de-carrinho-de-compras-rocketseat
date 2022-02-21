import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalStyle } from './styles/global';

const App = (): JSX.Element => {
  return (
    <>
    <GlobalStyle/>
    <Router>
      <Routes/>
    </Router>
    </>
  );
};

export default App;
