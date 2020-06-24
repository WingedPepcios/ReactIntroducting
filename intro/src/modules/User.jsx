import React, {useEffect, useState} from 'react';
import Avatar from "../atoms/Avatar";

const User = ({defaultUserData}) => {
    const [
        {
            userName,
            userEmail,
            userRole,
            userAvatar
        },
        setUserData
    ] = useState(defaultUserData);

    useEffect(
        () => {
            setUserData({...defaultUserData});
        },
        [defaultUserData]
    );

    return (
        <div>
            <h1>{userName} <span className="userRole">({userRole})</span></h1>
            <ul>
                <li>
                    <strong>Awatar</strong>
                    <Avatar>{userAvatar}</Avatar>
                </li>
                <li>
                    <strong>E-mail</strong>
                    <span>{userEmail}</span>
                </li>
            </ul>
        </div>
    );
}

export default User;