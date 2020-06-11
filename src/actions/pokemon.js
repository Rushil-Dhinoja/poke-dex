import axios from 'axios';
import { GET_POKEMONS, GET_POKEMON, ERROR, SET_LOADING } from './types';

export const getPokemons = (url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=24') => async (
    dispatch
) => {
    try {
        dispatch({
            type: SET_LOADING,
        });

        const res = await axios.get(url);
        const urls = res.data.results;

        const detailData = await Promise.all(urls.map(async (url) => await axios.get(url.url)));

        const payload = {
            count: res.data.count,
            prev: res.data.previous,
            next: res.data.next,
            current: url,
            detailData,
        };

        dispatch({
            type: GET_POKEMONS,
            payload: payload,
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: ERROR,
            payload: { msg: err.message },
        });
    }
};

export const getPokemon = (name) => async (dispatch) => {
    try {
        dispatch({
            type: SET_LOADING,
        });

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

        const species = await axios.get(res.data.species.url);

        const evolutionChain = await axios.get(species.data.evolution_chain.url);

        let level1 = 'not available',
            level2 = 'not available',
            level3 = 'not available';

        if (evolutionChain.data.chain.species.url) {
            level1 = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${
                    evolutionChain.data.chain.species.url.split('/')[6]
                }`
            );
            level1 = level1.data;
        }

        if (
            evolutionChain.data.chain.evolves_to.length !== 0 &&
            evolutionChain.data.chain.evolves_to[0].species.url
        ) {
            level2 = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${
                    evolutionChain.data.chain.evolves_to[0].species.url.split('/')[6]
                }`
            );
            level2 = level2.data;
        }

        if (
            evolutionChain.data.chain.evolves_to.length !== 0 &&
            evolutionChain.data.chain.evolves_to[0].evolves_to.length !== 0 &&
            evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.url
        ) {
            level3 = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${
                    evolutionChain.data.chain.evolves_to[0].evolves_to[0].species.url.split('/')[6]
                }`
            );

            level3 = level3.data;
        }

        const evolutionData = {
            level1,
            level2,
            level3,
        };
        console.log(evolutionData);

        const payload = {
            data: res.data,
            species: species.data,
            evolution: evolutionChain.data,
            evolutionData: evolutionData,
        };

        dispatch({
            type: GET_POKEMON,
            payload: payload,
        });
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: { msg: err.message },
        });
    }
};
