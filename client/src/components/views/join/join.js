import React, { useEffect } from 'react';

import './join.css';

const Join = () => {
  useEffect(() => {
    setTimeout(() => {
    }, 1000);
  }, [])

  return (
    <main id='join_main'>
      <div id='background'></div>
      <div id='join_container'>
        <img src='../img/register.jpg' alt='' />
        <div id='register'>
          <h1>Join the Community</h1>
          <form action='#'>
            <input type='text' placeholder='First Name' />
            <input type='text' placeholder='Last Name' />
            <input type='email' placeholder='Email Address' />
            <input type='password' placeholder='Password' />
            <input type='password' placeholder='Confirm Password' />
            <input type='submit' value='Join!' />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Join;