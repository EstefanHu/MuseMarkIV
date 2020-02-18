import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Home from './components/views/home/home';
import Genre from './components/views/genre/genre';
import Post from './components/views/post';
import Author from './components/views/author/author'
import Join from './components/views/join/join';
import ReadMore from './components/views/readmore';
import Submit from './components/views/submit/submit';

const App = () => {
  return (
    <Router>
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
        <Route path='/author' exact>
          <Author />
        </Route>
        <Route path='/join' exact>
          <Join />
        </Route>
        <Route path='/readmore' exact>
          <ReadMore />
        </Route>
        <Route path='/submit/:genre' exact>
          <Submit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
