import React, { useState, useEffect } from 'react';

import Card from '../card/card';

const Dashboard = () => {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch('http://localhost:4000/dashboard/')
      .then(res => res.json())
      .then(res => {
        console.log(res.content)
        setContent(res.content)
      });
  }, []);

  return content ? (
    <section>
      {/* {content.map(item => (
        <Card key={ item.id } />
      ))} */}
      <p>{content.id}</p>
    </section>
  ) : (
    <section>
      <p>Loading...</p>
    </section>
  )
}

export default Dashboard;