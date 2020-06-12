import { GET_LIKED, REMOVE_LIKED } from './types';
import axios from 'axios';

export const getLiked = () => async (dispatch) => {
    try {
        if (
            JSON.parse(localStorage.getItem('liked')) !== null &&
            JSON.parse(localStorage.getItem('liked')).length !== 0
        ) {
            const data = await Promise.all(
                JSON.parse(localStorage.getItem('liked')).map(async (like) =>
                    axios.get(`https://pokeapi.co/api/v2/pokemon/${like}`)
                )
            );
            return dispatch({
                type: GET_LIKED,
                payload: data,
            });
        }

        return dispatch({
            type: GET_LIKED,
            payload: [],
        });
    } catch (error) {
        console.log(error);
    }
};

export const addLiked = (id) => async (dispatch) => {
    try {
        const liked = JSON.parse(localStorage.getItem('liked'));
        if (!liked.includes(id)) {
            return localStorage.setItem('liked', JSON.stringify([...liked, id]));
        }
    } catch (error) {
        console.log(error);
    }
};

export const removeLiked = (id) => (dispatch) => {
    try {
        const liked = JSON.parse(localStorage.getItem('liked'));
        if (liked.includes(id)) {
            localStorage.setItem('liked', JSON.stringify(liked.filter((like) => like !== id)));

            return dispatch({
                type: REMOVE_LIKED,
                payload: id,
            });
        }
    } catch (error) {
        console.log(error);
    }
};
