import React from 'react';
import { useParams } from 'react-router-dom';

import Nav from '../../layout/homenav/homenav';

const Submit = () => {
    const { genre } = useParams();

    return (
        <>
            <Nav />
            <main>
                
            </main>
        </>
    )
}

export default Submit;