import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPokemon } from '../../actions/pokemon';
import Loader from '../layout/Loader';
import { withRouter } from 'react-router-dom';
import Error from '../layout/Error';
import PokemonHeader from './PokemonHeader';
import AboutPokemon from './AboutPokemon';
import MovesAndAbilities from './MovesAndAbilities';
import EvolutionCycle from './EvolutionCycle';

const Pokemon = ({ match, getPokemon, pokemon: { loading, pokemon, error }, history }) => {
    useEffect(() => {
        getPokemon(match.params.name.toLowerCase());
    }, [getPokemon, match.params.name]);

    return (
        <div className='container'>
            {error !== null ? (
                <Error />
            ) : loading || pokemon === null ? (
                <Loader />
            ) : (
                <div className='container__pokemon'>
                    <button
                        className={`buttons__button buttons__button--explore`}
                        onClick={() => {
                            history.push('/pokemons');
                        }}>
                        <svg
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path d='M15.84 5.92V9.92H6.84L10.34 13.42L7.92 15.84L0 7.92L7.92 0L10.34 2.42L6.84 5.92H15.84Z' />
                        </svg>
                    </button>
                    <div className='pokemon-info'>
                        <PokemonHeader pokemon={pokemon} />
                        <AboutPokemon pokemon={pokemon} />
                        <MovesAndAbilities pokemon={pokemon} />
                        <EvolutionCycle pokemon={pokemon} />
                    </div>
                </div>
            )}
        </div>
    );
};

Pokemon.propTypes = {
    pokemon: PropTypes.object.isRequired,
    getPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    pokemon: state.pokemon,
});

export default connect(mapStateToProps, { getPokemon })(withRouter(Pokemon));
