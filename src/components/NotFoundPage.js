import React from "react";
import {Link} from 'react-router';

const NotFoundPage = () => (
    <div>
        Page not Found - <Link to="/" className='is-active'>Go Home</Link>
    </div>
);
export default NotFoundPage;