import React from 'react';

import Logo from './logo';
import Icon from './icon';
import Actions from './actions';

const Nav = props => {
  return (
    <nav style={ navBar }>
      <Logo />
      <Icon />
      <Actions user={ props.user } />
    </nav>
  )
}

const navBar = {
  display: 'flex',
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  height: '60px',
  backgroundColor: 'white',
  zIndex: '10',
  padding: '10px 50px',
}

export default Nav;