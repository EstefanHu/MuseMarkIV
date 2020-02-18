import React from 'react';

import Comment from './comment/comment';

const Comments = props => {
  const comments = props.comments;

  return comments ? (
    <section id='post__comments'>
      {comments.map(item => (
        <Comment
          key={ item.id }
          // TODO: pass id down for responding to comment functionality
          comment={ item.comment }
          creator={ item.creator }
        />
      ))}
    </section>
  ) : (
    <section id='post__comments'>
      Loading...
    </section>
  )
}

export default Comments;