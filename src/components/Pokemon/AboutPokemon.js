import React from 'react';
import PropTypes from 'prop-types';
import Texts from './Texts';

const AboutPokemon = ({ pokemon: { species } }) => {
    return (
        <div className='pokemon-about'>
            <div className='pokemon-about__bio'>
                <h2 className='pokemon-about__bio__heading'>About</h2>
                <h4 className='pokemon-about__bio__generation'>{species.generation.name}</h4>
                <p className='pokemon-about__bio__text'>
                    <Texts species={species} />
                </p>
            </div>
            <div className='pokemon-about__info'>
                <div className='pokemon-about__info__breeding'>
                    <h2>Breeding</h2>
                    <div className='pokemon-about__info__breeding__infos'>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            {' '}
                            <div className='pokemon-about__info__breeding__infos__info__key'>
                                {' '}
                                Gender Ratio{' '}
                            </div>{' '}
                            <div className='pokemon-about__info__breeding__infos__info__value'>
                                <div>
                                    {' '}
                                    <div>
                                        <svg
                                            width='10'
                                            height='19'
                                            viewBox='0 0 10 19'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M1.04228e-07 0C1.04228e-07 0.776225 0.180726 1.54179 0.527864 2.23607C0.875003 2.93034 1.37902 3.53426 2 4C1.37902 4.46574 0.875003 5.06966 0.527864 5.76393C0.180726 6.45821 1.04228e-07 7.22377 1.04228e-07 8C-0.000235151 9.15265 0.397783 10.27 1.12669 11.1629C1.8556 12.0558 2.87064 12.6695 4 12.9V15H2V17H4V19H6V17H8V15H6V12.9C7.12936 12.6695 8.1444 12.0558 8.87331 11.1629C9.60222 10.27 10.0002 9.15265 10 8C10 7.22377 9.81927 6.45821 9.47214 5.76393C9.125 5.06966 8.62098 4.46574 8 4C8.62098 3.53426 9.125 2.93034 9.47214 2.23607C9.81927 1.54179 10 0.776225 10 0H8C8 0.795649 7.68393 1.55871 7.12132 2.12132C6.55871 2.68393 5.79565 3 5 3C4.20435 3 3.44129 2.68393 2.87868 2.12132C2.31607 1.55871 2 0.795649 2 0H1.04228e-07ZM5 5C5.79565 5 6.55871 5.31607 7.12132 5.87868C7.68393 6.44129 8 7.20435 8 8C8 8.79565 7.68393 9.55871 7.12132 10.1213C6.55871 10.6839 5.79565 11 5 11C4.20435 11 3.44129 10.6839 2.87868 10.1213C2.31607 9.55871 2 8.79565 2 8C2 7.20435 2.31607 6.44129 2.87868 5.87868C3.44129 5.31607 4.20435 5 5 5V5Z'
                                                fill='#F95587'
                                            />
                                        </svg>
                                        {species.gender_rate !== -1
                                            ? species.gender_rate * 12.5
                                            : '0'}
                                        <span>%</span>{' '}
                                    </div>
                                    <div>
                                        <svg
                                            width='18'
                                            height='18'
                                            viewBox='0 0 18 18'
                                            fill='none'
                                            xmlns='http://www.w3.org/2000/svg'>
                                            <path
                                                d='M6 6C7.29 6 8.5 6.41 9.47 7.11L14.58 2H10V0H18V8H16V3.41L10.89 8.5C11.59 9.5 12 10.7 12 12C12 13.5913 11.3679 15.1174 10.2426 16.2426C9.11742 17.3679 7.5913 18 6 18C4.4087 18 2.88258 17.3679 1.75736 16.2426C0.632141 15.1174 0 13.5913 0 12C0 10.4087 0.632141 8.88258 1.75736 7.75736C2.88258 6.63214 4.4087 6 6 6ZM6 8C4.93913 8 3.92172 8.42143 3.17157 9.17157C2.42143 9.92172 2 10.9391 2 12C2 13.0609 2.42143 14.0783 3.17157 14.8284C3.92172 15.5786 4.93913 16 6 16C7.06087 16 8.07828 15.5786 8.82843 14.8284C9.57857 14.0783 10 13.0609 10 12C10 10.9391 9.57857 9.92172 8.82843 9.17157C8.07828 8.42143 7.06087 8 6 8Z'
                                                fill='#42BFDD'
                                            />
                                        </svg>
                                        {species.gender_rate !== -1
                                            ? (8 - species.gender_rate) * 12.5
                                            : '100'}
                                        <span>%</span>
                                    </div>
                                </div>
                            </div>{' '}
                        </div>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>
                                Visible GD{' '}
                            </p>{' '}
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {species.has_gender_differences ? 'Yes' : 'No'}
                            </p>{' '}
                        </div>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>
                                Egg Group
                            </p>
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {species.egg_groups[0].name}
                            </p>{' '}
                        </div>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>
                                Shape{' '}
                            </p>
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {species.shape.name}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='pokemon-about__info__capture'>
                    <h2>Capture & Hatching</h2>
                    <div className='pokemon-about__info__capture__infos'>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>Color</p>
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {species.color.name}
                            </p>
                        </div>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>
                                Capture Rate
                            </p>
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {species.capture_rate} /<span> 255</span>
                            </p>
                        </div>
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>
                                Hatch Steps
                            </p>
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {(species.hatch_counter + 1) * 255}
                            </p>
                        </div>{' '}
                        <div className='pokemon-about__info__breeding__infos__info'>
                            <p className='pokemon-about__info__breeding__infos__info__key'>
                                Habitat
                            </p>
                            <p className='pokemon-about__info__breeding__infos__info__value'>
                                {species.habitat ? species.habitat.name : 'Not Available'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AboutPokemon.propTypes = {
    pokemon: PropTypes.object.isRequired,
};

export default AboutPokemon;
