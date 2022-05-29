import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Link to="/"><button className="btn btn-primary mt-4">Go to Home</button></Link>
            <br />
            <img className="w-50" src={'https://i.postimg.cc/Xvp32RGF/404.jpg'} alt="" />


        </div>
    );
};

export default NotFound;