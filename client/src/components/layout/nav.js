import React from 'react';

const Nav = () => {
  return (
    <nav style={ navBar }>
      <div className="fire">
        <div className="fire-left">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-main">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-right">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-bottom">
          <div className="main-fire"></div>
        </div>
      </div>
    </nav>
  )
}

const navBar = {
  position: 'absolute',
  bottom: '70px',
  right: '100px',
}

export default Nav;