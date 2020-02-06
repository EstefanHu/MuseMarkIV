import React from 'react';

const Title = props => {
  return (
    <h1 style={ title }>{ props.title }</h1>
  )
}

const title = {
  color: 'black',
  textDecoration: 'none',
  fontSize: '1.5rem'
}

export default Title;