import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import pokeball from '../../img/pokeball.png';

const Sidebar = ({ version, setSideDrawer, sideDrawer }) => {
    return (
        <div className='sidebar'>
            <div className='sidebar__branding'>
                <img className='sidebar__branding__image' src={pokeball} alt='LOGo' />
                <p className='sidebar__branding__brandname'>Poke-DEX</p>
                <p className='sidebar__branding__version'>v {version}</p>
            </div>
            <p className='sidebar__heading'>discover</p>
            <nav className='sidebar__navigation'>
                <ul className='sidebar__navigation__list'>
                    <li>
                        <NavLink
                            activeClassName='active-link'
                            className='link sidebar__navigation__list'
                            to='/pokemons'
                            onClick={() => {
                                if (sideDrawer) setSideDrawer(false);
                            }}>
                            <svg
                                width='20'
                                height='20'
                                viewBox='0 0 20 20'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0ZM10 2C5.92 2 2.55 5.05 2.06 9H6.13C6.57 7.27 8.14 6 10 6C11.86 6 13.43 7.27 13.87 9H17.94C17.45 5.05 14.08 2 10 2ZM10 18C14.08 18 17.45 14.95 17.94 11H13.87C13.43 12.73 11.86 14 10 14C8.14 14 6.57 12.73 6.13 11H2.06C2.55 14.95 5.92 18 10 18ZM10 8C9.46957 8 8.96086 8.21071 8.58579 8.58579C8.21071 8.96086 8 9.46957 8 10C8 10.5304 8.21071 11.0391 8.58579 11.4142C8.96086 11.7893 9.46957 12 10 12C10.5304 12 11.0391 11.7893 11.4142 11.4142C11.7893 11.0391 12 10.5304 12 10C12 9.46957 11.7893 8.96086 11.4142 8.58579C11.0391 8.21071 10.5304 8 10 8Z'
                                    fill='#000'
                                />
                            </svg>
                            Pokemons
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <p className='sidebar__copyright'>&copy; Rushil Dhinoja {new Date().getFullYear()}</p>
        </div>
    );
};

Sidebar.propTypes = {
    version: PropTypes.string.isRequired,
    setSideDrawer: PropTypes.func,
    sideDrawer: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    version: state.version,
});

export default connect(mapStateToProps, {})(Sidebar);
