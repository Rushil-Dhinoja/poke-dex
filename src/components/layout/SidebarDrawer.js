import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';

const SidebarDrawer = ({ sideDrawer, setSideDrawer }) => {
    return (
        <div className={sideDrawer ? 'sidebar__drawer open ' : 'sidebar__drawer'}>
            <button className='sidebar__drawer__btn' onClick={() => setSideDrawer(false)}>
                <div className='sidebar__drawer__btn__close'></div>
            </button>
            <Sidebar setSideDrawer={setSideDrawer} sideDrawer={sideDrawer} />
        </div>
    );
};

SidebarDrawer.propTypes = {
    sideDrawer: PropTypes.bool.isRequired,
    setSideDrawer: PropTypes.func.isRequired,
};

export default SidebarDrawer;
