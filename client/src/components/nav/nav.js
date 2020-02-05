import React from 'react';

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
  position: 'relative',
  left: '0',
  top: '0',
  right: '0',
  height: '100px',
  backgroundColor: 'white',
  zIndex: '10',
  padding: '10px 50px',
}

export default Nav;