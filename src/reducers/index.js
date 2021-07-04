/** @format */

import { combineReducers } from "redux";
import version from "./version";
import pokemon from "./pokemon";
import liked from "./liked";
import moves from "./moves";
export const rootReducer = combineReducers({ version, pokemon, moves, liked });
