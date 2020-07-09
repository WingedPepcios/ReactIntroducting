import React from 'react';
import MenuElement from "../atoms/MenuElement";
import UserToolbox from "./UserToolbox";

const menuElements = [
    {
        name: "Dashboard",
        destination: "/"
    },
    {
        name: "Posts",
        destination: "/posts/list"
    },
    {
        name: "Editor",
        destination: "/posts/editor"
    },
    {
        name: "Settings",
        destination: "/settings"
    }
];

const Navigation = () => {
    return (
        <>
            <nav>
                {menuElements.map((v) => <MenuElement key={v.name}>{v}</MenuElement>)}
            </nav>
            <UserToolbox/>
        </>
    );
};

export default Navigation;