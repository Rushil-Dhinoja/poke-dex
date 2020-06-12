import { combineReducers } from 'redux';
import version from './version';
import pokemon from './pokemon';
import liked from './liked';
export const rootReducer = combineReducers({ version, pokemon, liked });
