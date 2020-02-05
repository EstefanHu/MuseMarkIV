import React, { useState, useEffect } from 'react';

import Base from './base';
import Feed from './feed';

const Content = props => {
  return props.isBase ?
    <Base /> : <Feed />
}

const content = {
  gridArea: 'content',
  padding: '20px 40px'
}

export default Content;