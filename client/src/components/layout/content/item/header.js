import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <span className="post__header">
            <p>
                <Link to=''>{ props.genre }</Link> by { props.author }</p>
            <p>Cred: { props.credibility }</p>
        </span>
    )
}

export default Header;