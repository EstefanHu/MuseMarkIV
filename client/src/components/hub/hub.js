import React, { useState, useEffect } from 'react';

import Title from './title';

const Hub = props => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');

  useEffect(() => {
    setTitle(props.title);
    setImg(props.img);
  }, [
    props.title,
    props.img,
  ]);

  return(
    <article style={{
      height: '500px',
      width: '100%',
      boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
      padding: '20px 30px',
      backgroundColor: 'white',
      marginBottom: '20px',
      borderRadius: '5px',
      backgroundImage: `url(${'./imgs/' + img})`,
      backgroundRepeat: 'none',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>
      <Title title={ title } />
    </article>
  )
}

export default Hub;