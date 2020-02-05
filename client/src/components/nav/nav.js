import React from 'react';

import Info from './info';
import Navigator from './navigator';

const Nav = props => {
  return (
    <nav style={ navBar }>
      <Info user={ props.user } />
      <Navigator />
    </nav>
  )
}

const navBar = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'fixed',
  left: '0',
  top: '0',
  right: '0',
  height: '100px',
  backgroundColor: 'white',
  zIndex: '10',
  padding: '10px 50px',
}

export default Nav;