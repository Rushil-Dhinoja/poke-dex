import { GET_LIKED, REMOVE_LIKED } from '../actions/types';

const initialState = {
    liked: [],
    loading: true,
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_LIKED:
            return {
                ...state,
                liked: payload,
                loading: false,
            };
        case REMOVE_LIKED:
            return {
                ...state,
                liked: state.liked.filter((like) => like.data.id !== payload),
                loading: false,
            };
        default:
            return { ...state };
    }
}
