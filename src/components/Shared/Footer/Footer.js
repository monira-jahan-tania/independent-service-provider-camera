import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <footer className='text-center m-5'>
                <p><small>copyright <span>&copy;</span> monira {year}</small></p>
            </footer>
        </div>
    );
};

export default Footer;