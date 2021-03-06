/** @format */

import {
	GET_POKEMONS,
	ERROR,
	GET_POKEMON,
	SET_LOADING_POKEMON
} from "../actions/types";

const initialState = {
	prev: null,
	next: null,
	current: null,
	count: null,
	pokemons: null,
	pokemon: null,
	loading: true,

	error: null
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
				loading: false
			};
		case GET_POKEMON:
			return {
				...state,
				pokemon: payload,
				error: null,
				loading: false
			};
		case SET_LOADING_POKEMON:
			return {
				...state,
				loading: true
			};
		case ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return state;
	}
}
