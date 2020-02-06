import React from 'react';

const Pitch = props => {
  return (
    <p stlye={ pitch }>{ props.pitch }</p>
  )
}

const pitch = {
  paddingLeft: '10px'
}

export default Pitch;