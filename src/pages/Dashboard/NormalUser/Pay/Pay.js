import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Pay = () => {
    const { user } = useAuth();
    console.log(user)
    return (
        <div>
            <h2 className="default-text">{user.email}</h2>
            <h2 className="default-text">{user.displayName}</h2>

        </div>
    );
};

export default Pay;