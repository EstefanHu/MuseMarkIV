import React from 'react';

const Actions = props => {
  return (
    <span style={ actions }>
      <p>{ props.user }</p>
      <p>settings</p>
    </span>
  )
}

const actions = {
  display: 'flex',
}

export default Actions;