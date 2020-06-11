import React from 'react';
import PropTypes from 'prop-types';

const PrgoressBar = ({ name, value, color }) => {
    return (
        <div className='progress-bar'>
            <div className='progress-bar__data'>
                <p className='progress-bar__data__name'>{name}</p>
                <p className='progress-bar__data__value'>{value}</p>
            </div>
            <div className='progress-bar__bar'>
                <div
                    className={`progress-bar__bar__progress type-${color}`}
                    style={{ width: `${value / 2.55}%` }}></div>
            </div>
        </div>
    );
};

PrgoressBar.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default PrgoressBar;
