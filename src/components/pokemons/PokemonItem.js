import React from 'react';
import PropTypes from 'prop-types';
import pokeball from '../../img/pokeball.png';
import { Link } from 'react-router-dom';

const PokemonItem = ({ pokemon }) => {
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
        </div>
    );
};

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
};

export default PokemonItem;
