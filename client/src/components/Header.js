import React from 'react';
import {Link} from '@reach/router';

const Header = () => {

    return(
        <div className='header-component'>
            <h1>Pet Shelter</h1>
            <Link to='/pets'>Back to Home</Link>
        </div>
    )
}

export default Header;