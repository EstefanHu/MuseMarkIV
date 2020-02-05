import React from 'react';

import Logo from './info/logo';
import Icon from './info/icon';
import Actions from './info/actions';

const Info = props => {
  return (
    <span style={ primary }>
      <Logo />
      <Icon />
      <Actions user={ props.user } />
    </span>
  )
}

const primary = {
  display: 'flex',
  justifyContent: 'space-between',
}

export default Info;