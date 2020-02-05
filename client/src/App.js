import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Nav from './components/nav/nav';
import Navigator from './components/navigator/navigator';
import Home from './components/views/home';
import Club from './components/views/club';
import Post from './components/views/post';

const App = () => {
  const user = 'Estefan Hu';
  return (
    <Router>
      <Nav user={ user }/>
      <Navigator />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/club' exact>
          <Club />
        </Route>
        <Route path='/post' exact>
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
