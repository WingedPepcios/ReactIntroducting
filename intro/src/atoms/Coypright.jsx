import React from 'react';
import { COPYRIGHT_TEXT } from '../data/literals';

const currentYear = new Date().getFullYear();

const Copyright = () => {
    return (
        <div>
            <div className="copyright">
                { COPYRIGHT_TEXT } { currentYear }
            </div>
        </div>
    );
};

export default Copyright;