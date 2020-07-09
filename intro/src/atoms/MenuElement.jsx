import React from 'react';

const MenuElement = ({ children }) => {

    const {name, linkText, destination, target} = children;

    return (
        <a href={destination} target={ target || null }>
            { linkText || name }
        </a>
    );
};

export default MenuElement;