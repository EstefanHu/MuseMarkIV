import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './author.css';
import Info from './components/info';

const Author = props => {
    const [author, setAuthor] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:4000/author/' + id)
            .then(res => res.json())
            .then(res => setAuthor(res.author))
            .catch(console.error);
    }, [id]);

    return author ? (
        <main id='author'>
            <Info name={ author.firstName + ' ' + author.lastName } />
        </main>
    ) : (
        <main id='author'>
            Loading...
        </main>
    )
}

export default Author;