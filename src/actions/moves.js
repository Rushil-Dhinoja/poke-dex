/** @format */

import axios from "axios";
import { ERROR, GET_MOVES, SET_LOADING_MOVES } from "./types";

export const getMoves =
	(url = " https://pokeapi.co/api/v2/move?offser=0&limit=54") =>
	async dispatch => {
		try {
			dispatch({
				type: SET_LOADING_MOVES
			});

			const res = await axios.get(url);
			const urls = res.data.results;

			const detailData = await Promise.all(
				urls.map(async url => await axios.get(url.url))
			);

			const payload = {
				count: res.data.count,
				prev: res.data.previous,
				next: res.data.next,
				current: url,
				detailData
			};

			dispatch({
				type: GET_MOVES,
				payload: payload
			});
		} catch (err) {
			console.log(err);
			dispatch({
				type: ERROR,
				payload: { msg: err.message }
			});
		}
	};
