import {
    GET_DATA_SUCCEED,
    GET_DATA_FAILED,
    GET_DATA_REQUESTED,
} from './actions';

export const initialCommentsState = {
    data: [],
    error: null,
    isLoading: false,
};

export const commentsReducer = (state = initialCommentsState, action) => {
    switch (action.type) {
        case GET_DATA_REQUESTED:
            return {
                ...state,
                error: initialCommentsState.error,
                isLoading: true,
            };
        case GET_DATA_SUCCEED:
            return {...state, data: action.payload, isLoading: false };
        case GET_DATA_FAILED:
            return {...state, error: action.error, isLoading: false };
        default:
            return {...state };
    }
};