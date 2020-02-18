import React from 'react';

import './content.css';

import Item from './item/item';

const Content = props => {
    const content = props.posts;

    return content ? (
        <section id='content'>
            {content.map(item => (
                <Item
                    key={ item.id }
                    id={ item.id }
                    genre={ item.genre }
                    title={ item.title }
                    author={ item.author }
                    date={ item.date }
                    pitch={ item.pitch }
                    credibility={ item.credibility }
                    length={ item.length }
                />
            ))}
        </section>
    ) : (
        <section id='content'>
            loading...
        </section>
    )
}

export default Content;