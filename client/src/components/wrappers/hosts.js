import React from 'react';

import Hub from '../hub/hub';

const Hosts = props => {
  return (
    <section style={ hosts }>
      {props.hubs.map(item => (
        <Hub
          key={ item.id }
          title={ item.title }
          pitch={ item.pitch }
        />
      ))}
    </section>
  )
}

const hosts = {
  borderRight: '1px solid black',
  width: '300px',
  height: 'fit-content',
  gridArea: 'hosts'
}

export default Hosts