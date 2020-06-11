import { combineReducers } from 'redux';
import version from './version';
import pokemon from './pokemon';
export const rootReducer = combineReducers({ version, pokemon });
