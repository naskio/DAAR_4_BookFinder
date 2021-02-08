import {SET_GLOBAL, RESET_GLOBAL, RESET_ALL} from "../actionTypes";


export const setGlobalAction = (payload) => ({
    type: SET_GLOBAL,
    payload,
});

export const resetGlobalAction = () => ({
    type: RESET_GLOBAL,
});

export const resetAllAction = () => ({
    type: RESET_ALL,
});
