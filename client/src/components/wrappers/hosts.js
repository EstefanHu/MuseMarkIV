import React from 'react';

import Hub from '../hub/hub';

const Hosts = props => {
  return (
    <section>
      {props.hubs.map(item => (
        <Hub
          key={ item.id }
          title={ item.title }
        />
      ))}
    </section>
  )
}

export default Hosts