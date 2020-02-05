import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo';
import Actions from './actions';

const Nav = props => {
  return (
    <nav style={ navBar }>
      <Logo />
      <Actions user={ props.user } />
    </nav>
  )
}

const navBar = {
  display: 'flex',
  justifyContent: 'space-between',
  height: '60px',
  padding: '20px 10px',
  width: '70vw',
  margin: '0 auto',
}

export default Nav;