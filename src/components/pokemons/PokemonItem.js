import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pokeball from '../../img/pokeball.png';
import { Link } from 'react-router-dom';
import { addLiked, removeLiked } from '../../actions/liked';
import { connect } from 'react-redux';

const PokemonItem = ({ pokemon, addLiked, removeLiked }) => {
    const [reRender, setReRender] = useState(false);

    return (
        <div className={`type-${pokemon.types[0].type.name} pokemon__grid__cell`}>
            <Link to={`/pokemons/${pokemon.name}`} className='pokemon__grid__cell__link'>
                <img
                    className='pokemon__grid__cell__link__img'
                    src={pokemon.sprites.front_default ? pokemon.sprites.front_default : pokeball}
                    alt=''
                />
                <p className='pokemon__grid__cell__link__name'>{pokemon.name}</p>
            </Link>
            {JSON.parse(localStorage.getItem('liked')).indexOf(pokemon.id) !== -1 ? (
                <svg
                    onClick={() => {
                        removeLiked(pokemon.id);
                        setReRender(!reRender);
                    }}
                    width='20'
                    height='19'
                    viewBox='0 0 20 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M10 18.35L8.55 17.03C3.4 12.36 0 9.27 0 5.5C0 2.41 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.08C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.41 20 5.5C20 9.27 16.6 12.36 11.45 17.03L10 18.35Z'
                        fill='white'
                    />
                </svg>
            ) : (
                <svg
                    onClick={() => {
                        addLiked(pokemon.id);
                        setReRender(!reRender);
                    }}
                    width='20'
                    height='19'
                    viewBox='0 0 20 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z'
                        fill='white'
                    />
                </svg>
            )}
        </div>
    );
};

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
    addLiked: PropTypes.func.isRequired,
};

export default connect(null, { addLiked, removeLiked })(PokemonItem);
