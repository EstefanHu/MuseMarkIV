import React from 'react';

const Description = props => {
  return (
    <p style={ desc } >{ props.description }</p>
  )
}

const desc = {
  fontSize: '1.1rem',
  fontWeight: '500',
  marginTop: '5px'
}

export default Description;