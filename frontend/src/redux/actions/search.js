import {FETCH_SEARCH, RESET_SEARCH} from "../actionTypes";

export const fetchSearchAction = (payload) => ({
    type: FETCH_SEARCH,
    payload,
});

export const resetSearchAction = () => ({
    type: RESET_SEARCH,
});
