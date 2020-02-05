import React from 'react';

import Base from './base';
import Feed from './feed';

const Content = props => {
  return props.isBase ?
    <Base /> : <Feed />
}

export default Content;