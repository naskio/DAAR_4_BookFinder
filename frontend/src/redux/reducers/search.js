import {FETCH_SEARCH, RESET_SEARCH, RESET_ALL} from '../actionTypes';

import initialState from '../initialState';

export default (state = initialState.search, action) => {
    switch (action.type) {
        case FETCH_SEARCH: {
            return {...action.payload};
        }
        case RESET_SEARCH:
        case RESET_ALL: {
            return initialState.search;
        }
        default: {
            return state;
        }
    }
};
