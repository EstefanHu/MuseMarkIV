import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Nav from './components/layout/nav';
import Dashboard from './components/wrappers/dashboard';

function App() {
  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
