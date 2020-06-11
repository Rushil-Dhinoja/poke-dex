import { GET_POKEMONS, ERROR, SET_LOADING, GET_POKEMON } from '../actions/types';

const initialState = {
    prev: null,
    next: null,
    current: null,
    count: null,
    pokemons: null,
    pokemon: null,
    loading: true,

    error: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_POKEMONS:
            return {
                ...state,
                prev: payload.prev,
                next: payload.next,
                current: payload.current,
                pokemons: payload.detailData,
                count: payload.count,
                error: null,
                loading: false,
            };
        case GET_POKEMON:
            return {
                ...state,
                pokemon: payload,
                error: null,
                loading: false,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true,
            };
        case ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        default:
            return state;
    }
}
