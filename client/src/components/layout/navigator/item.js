import React from 'react';
import { Link } from 'react-router-dom';

const Item = props => {
  return (
    <Link to={'/genre/' + props.name }>{ props.name }</Link>
  )
}

export default Item;