import React from 'react';
import Pokeball from '../../img/pokeball.png';

const Loader = () => {
    return (
        <div className='loader'>
            <img className='loader__img' src={Pokeball} alt='' />
            <div className='loader__shadow'></div>
        </div>
    );
};

export default Loader;
