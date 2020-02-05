import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" style={ logo }>Project Muse</Link>
  )
}

const logo = {
  width: '300px',
  color: 'black',
  textDecoration: 'none',
  fontSize: '2rem',
  fontWeight: 'bold',
}

export default Logo;