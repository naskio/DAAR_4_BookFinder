import {combineReducers} from 'redux';

import global from './reducers/global';
import search from './reducers/search';


export default combineReducers({
    global,
    search,
});
