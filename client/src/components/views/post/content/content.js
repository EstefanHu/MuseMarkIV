import React from 'react';

const Content = props => {
  return (
    <section id='post__content'>
      <h1>{ props.title }</h1>
      <p>{ props.content }</p>
    </section>
  )
}

export default Content;