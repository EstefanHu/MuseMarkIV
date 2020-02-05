import React, { useState, useEffect } from 'react';

const Content = () => {
  const isHome = useState(false);

  useEffect(() => {

  }, []);

  return (
    <section style={ content }>
      <h1>Hello World</h1>
    </section>
  )
}

const content = {
  gridArea: 'content',
  padding: '20px 40px'
}

export default Content;