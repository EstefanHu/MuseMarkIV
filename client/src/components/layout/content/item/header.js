import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <span className="post__header">
            <p>
                <Link to={ '/genre/' + props.genre } id='feed__genre'>{ props.genre }</Link> by <Link to={ '/author/' + props.authorId } id='feed__author'>{ props.author }</Link></p>
            <p>Cred: { props.credibility }</p>
        </span>
    )
}

export default Header;