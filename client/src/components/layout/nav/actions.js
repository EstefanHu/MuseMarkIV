import React from 'react';
import { Link } from 'react-router-dom';

const Actions = () => {
  return (
    <Link to='/join'>
      <button style={ join } id='join'>
        Join Muse
      </button>
    </Link>
  )
}

const join = {
  border: '1px solid grey',
  borderRadius: '5px',
  height: '34px',
  width: '84px',
  fontWeight: 'bold',
  fontSize: '.8rem',
  color: 'grey',
  backgroundColor: 'white',
  marginTop: '5px'
}

export default Actions;