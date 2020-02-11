import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Nav from './components/layout/nav/nav';
import Navigator from './components/layout/navigator/navigator';
import Home from './components/views/home/home';
import Genre from './components/views/genre/genre';
import Post from './components/views/post';
import Join from './components/views/join';
import ReadMore from './components/views/readmore';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Navigator />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/genre/:genre' exact>
          <Genre />
        </Route>
        <Route path='/post' exact>
          <Post />
        </Route>

        <Route path='/join' exact>
          <Join />
        </Route>
        <Route path='/readmore' exact>
          <ReadMore />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
