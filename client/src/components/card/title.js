import React from 'react';

const Title = (props) => {
  return (
    <h1 style={ title } >{ props.title }</h1>
  )
}

const title = {
  color: 'rgb(61, 61, 61)',
  textDecoration: 'none',
}

export default Title;