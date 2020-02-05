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
  width: '100%',
  height: 'fit-content',
  gridArea: 'hosts',
  padding: '10px 20px'
}

export default Hosts