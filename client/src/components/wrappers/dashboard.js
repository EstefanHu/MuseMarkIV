import React, { Component } from 'react';

import Card from '../card/card';

const Dashboard = (props) => {
  return (
    <section>
      {props.content.map(item => (
        <Card key={ item.id } props={ item } />
      ))}
    </section>
  )
}

export default Dashboard;