import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Nav from './components/layout/nav/nav';

import Home from './components/views/home/home';
import Genre from './components/views/genre/genre';
import Post from './components/views/post/post';
import Author from './components/views/author/author'
import Join from './components/views/join/join';
import ReadMore from './components/views/readmore/readmore';
import Submit from './components/views/submit/submit';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/genre/:genre' exact>
          <Genre />
        </Route>
        <Route path='/post/:id' exact>
          <Post />
        </Route>
        <Route path='/author/:id' exact>
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
