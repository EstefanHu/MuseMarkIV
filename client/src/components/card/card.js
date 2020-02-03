import React, { Component } from 'react';

import Title from './title';
import Genre from './genre';
import Credibility from './credibility';
import Description from './description';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
    }
  }

  render() {
    return (
      <article style={ article } >
        <span style={ header } >
          <p>
            <Genre genre={ this.props.genre } /> by { this.props.author }
          </p>
          <Credibility credibility={ this.props.credibility } />
        </span>
        <Title title={ this.props.title } />
        <Description description={ this.props.description } />
      </article>
    )
  }
}

const article = {
  borderRadius: '5px',
  width: '600px',
  margin: '0px auto 35px auto',
  padding: '20px 25px',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
  fontSize: '1rem',
  color: 'rgb(61, 61, 61)',
  backgroundColor: 'rgb(255, 255, 255)'
}

const header = {
  display: 'flex',
  justifyContent: 'space-between'
}

export default Card;