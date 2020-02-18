import React from 'react';

const Comment = props => {
  return (
    <div id='post__comments--comment'>
      <p>{ props.comment }</p>
      <p>{ props.creator }</p>
    </div>
  )
}

export default Comment;