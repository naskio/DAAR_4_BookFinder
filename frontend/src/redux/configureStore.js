import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import {name as appName} from "../../package.json";
import {IS_DEV} from "../config";
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'root',
    keyPrefix: appName,
    storage: storage,
    // whitelist: [],
    // blacklist: ['logs', 'sparql'],
    // stateReconciler: autoMergeLevel2,
};

const middlewares = [thunk, promise];

if (IS_DEV) {
    middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(...middlewares));
    let persistor = persistStore(store);
    // persistor.purge();
    return {store, persistor};
};
