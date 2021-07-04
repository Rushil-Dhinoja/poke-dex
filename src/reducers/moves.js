/** @format */
import { GET_MOVES, SET_LOADING_MOVES } from "../actions/types";
const initialState = {
	prev: null,
	next: null,
	current: null,
	count: null,
	moves: null,
	move: null,
	loading: true
};

export default function (state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case GET_MOVES:
			return {
				...state,
				prev: payload.prev,
				next: payload.next,
				current: payload.current,
				moves: payload.detailData,
				count: payload.count,
				error: null,
				loading: false
			};
		case SET_LOADING_MOVES:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
