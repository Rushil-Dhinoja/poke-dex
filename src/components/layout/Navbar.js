import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ setSideDrawer }) => {
    return (
        <div className='navbar'>
            <button
                onClick={() => {
                    setSideDrawer(true);
                }}
                className='navbar__btn'>
                <div className='navbar__btn__hamburger'></div>
            </button>
        </div>
    );
};

Navbar.propTypes = {
    setSideDrawer: PropTypes.func,
};

export default Navbar;
