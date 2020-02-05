import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Nav from './components/layout/nav';
import Home from './components/views/home';
import Dashboard from './components/views/dashboard';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/dashboard' exact>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
