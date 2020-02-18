import React from 'react';

import Item from './item';

const Showcase = props => {
  const post = props.item;

  return post ? (
    <aside id='showcase'>
      <h2>Muse Showcase</h2>
      <hr/>
      {post.map((item, index) => (
        <Item
          key={ item.id }
          count={ index + 1 }
          title={ item.title }
          author={ item.author }
          date={ item.date }
        />
      ))}
    </aside>
  ) : (
    <aside id='showcase'>
      Loading...
    </aside>
  )
}

export default Showcase;