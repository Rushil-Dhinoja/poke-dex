import React from 'react';
import PropTypes from 'prop-types';

const EvolutionCycle = ({ pokemon: { evolution, evolutionData } }) => {
    return (
        <div className='evolution-chain'>
            <h4>Evolution Chain</h4>
            <div className='evolution-chain__cycle'>
                {evolution.chain.species.name ? (
                    <div className='evolution-chain__cycle__1'>
                        {evolutionData.level1 !== 'not available' ? (
                            <div>
                                <img src={evolutionData.level1.sprites.front_default} alt='' />
                                <p>{evolutionData.level1.name}</p>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
                {evolution.chain.evolves_to.length !== 0 ? (
                    <div className='evolution-chain__cycle__2'>
                        {evolutionData.level2 !== 'not available' ? (
                            <div className='evolution-chain__cycle__2__details'>
                                <div className='evolution-chain__cycle__2__details__arrows'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M0 10.84V4.84H8V0L15.84 7.84L8 15.68V10.84H0Z'
                                            fill='#37474F'
                                        />
                                    </svg>
                                    <p>
                                        {evolution.chain.evolves_to[0].evolution_details.length !==
                                            0 &&
                                        evolution.chain.evolves_to[0].evolution_details[0]
                                            .min_level !== null
                                            ? evolution.chain.evolves_to[0].evolution_details[0]
                                                  .min_level + ' lvl'
                                            : ''}{' '}
                                    </p>
                                </div>
                                <div className='evolution-chain__cycle__2__details__detail'>
                                    {' '}
                                    <img src={evolutionData.level2.sprites.front_default} alt='' />
                                    <p>{evolutionData.level2.name}</p>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
                {evolution.chain.evolves_to.length !== 0 &&
                evolution.chain.evolves_to[0].evolves_to.length !== 0 ? (
                    <div className='evolution-chain__cycle__3'>
                        {evolutionData.level2 !== 'not available' ? (
                            <div className='evolution-chain__cycle__3__details'>
                                <div className='evolution-chain__cycle__3__details__arrows'>
                                    <svg
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M0 10.84V4.84H8V0L15.84 7.84L8 15.68V10.84H0Z'
                                            fill='#37474F'
                                        />
                                    </svg>
                                    <p>
                                        {evolution.chain.evolves_to[0].evolves_to[0]
                                            .evolution_details.length !== 0 &&
                                        evolution.chain.evolves_to[0].evolves_to[0]
                                            .evolution_details[0].min_level !== null
                                            ? evolution.chain.evolves_to[0].evolves_to[0]
                                                  .evolution_details[0].min_level + ' lvl'
                                            : ''}{' '}
                                    </p>
                                </div>
                                <div className='evolution-chain__cycle__3__details__detail'>
                                    <img src={evolutionData.level3.sprites.front_default} alt='' />
                                    <p>{evolutionData.level3.name}</p>
                                </div>
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

EvolutionCycle.propTypes = {
    pokemon: PropTypes.object.isRequired,
};

export default EvolutionCycle;
