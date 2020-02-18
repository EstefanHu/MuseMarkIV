import React from 'react';
import { Link } from 'react-router-dom';

import Header from './header';

const Item = props => {
    return (
        <article>
            <span>
                <Header
                    genre={ props.genre }
                    author={ props.author }
                    credibility= { props.credibility }
                />
                <Link to={ '/post/' + props.id }>
                    <h1>{ props.title }</h1>
                </Link>
                <p className='post__pitch'>{ props.pitch }</p>
                <p className='post__footer'>{ props.date } - { props.length }</p>
            </span>
        </article>
    )
}

export default Item;