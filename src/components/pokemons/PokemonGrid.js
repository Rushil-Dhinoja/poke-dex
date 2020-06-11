import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from './PokemonItem';

const PokemonGrid = ({ pokemons }) => {
    return (
        <div className='pokemon__grid'>
            {pokemons.map((pokemon) => {
                return <PokemonItem key={pokemon.data.id} pokemon={pokemon.data} />;
            })}
        </div>
    );
};

PokemonGrid.propTypes = {
    pokemons: PropTypes.array.isRequired,
};

export default PokemonGrid;
