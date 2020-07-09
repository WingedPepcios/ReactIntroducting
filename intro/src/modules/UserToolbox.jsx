import React from 'react';
import MenuElement from "../atoms/MenuElement";

const userLinks = [
    {
        name: 'login',
        linkText: 'Sign in',
        destination: '/login',
        userLogged: false,
    },
    {
        name: 'register',
        linkText: 'Sign up',
        destination: '/register',
        userLogged: false,
    },
    {
        name: 'profile',
        linkText: 'My profile',
        destination: '/me',
        userLogged: true,
    },
    {
        name: 'logout',
        linkText: 'Log out',
        destination: '/logout',
        userLogged: true,
    }
];

const UserToolbox = () => {
    return (
        <div className="userToolbox">
            <ul>
                { userLinks.map((v) => (
                    <li key={v.name}>
                        <MenuElement>{ v}</MenuElement>
                    </li>
                )) }
            </ul>
        </div>
    );
};

export default UserToolbox;