import {
    setGlobalAction,
    resetGlobalAction,
    resetAllAction,
} from "../actions/global";

export const setTitle = (title) => setGlobalAction({title});
export const setGlobal = setGlobalAction;
export const resetGlobal = resetGlobalAction;
export const resetAll = resetAllAction;
