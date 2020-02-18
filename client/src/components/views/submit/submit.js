import React from 'react';
import { useParams } from 'react-router-dom';

const Submit = () => {
    const { genre } = useParams();

    return (
        <>
            <main>
                <h1>{ genre }</h1>
            </main>
        </>
    )
}

export default Submit;