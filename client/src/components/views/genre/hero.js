import React from 'react';
import { Link } from 'react-router-dom';

const Hero = props => {
    return (
        <section id='genre__hero'>
            <h1>{ props.title }</h1>
            <Link to={ '/submit/' + props.title }>
                <button>Submit</button>
            </Link>
        </section>
    )
}

export default Hero;