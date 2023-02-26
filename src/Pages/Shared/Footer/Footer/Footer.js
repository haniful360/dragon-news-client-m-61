import React from 'react';

const Footer = () => {
    const time = new Date().getTime();
    return (
        <div>
            <p>this is footer: {time}</p>
        </div>
    );
};

export default Footer;