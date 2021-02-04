import React from 'react';
import {Link} from '@reach/router';

const ListHeader = () => {

    return(
        <div className='header-component'>
            <h1>Pet Shelter</h1>
            <Link to='/pet/new'>Add a pet to the shelter</Link>
        </div>
    )
}

export default ListHeader;