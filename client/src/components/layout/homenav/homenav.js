import React from 'react';

import Logo from './logo';
import Actions from './actions';

const Nav = props => {
  return (
    <nav id='home__nav'>
      <Logo />
      <Actions user={ props.user } />
    </nav>
  )
}

export default Nav;