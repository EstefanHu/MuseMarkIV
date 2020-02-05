import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Nav from './components/nav/nav';
import Home from './components/views/home';
import Dashboard from './components/views/dashboard';

const App = () => {
  const user = 'Estefan Hu';
  return (
    <Router>
      <Nav user={ user }/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
