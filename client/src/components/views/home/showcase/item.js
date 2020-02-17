import React from 'react';

const Item = props => {
  return (
    <div className='showcase_item'>
      <h3>0{ props.count }</h3>
      <span>
        <h4>{ props.title }</h4>
        <p>{ props.author }</p>
        <p className='showcase_date'>{ props.date }</p>
      </span>
    </div>
  )
}

export default Item;