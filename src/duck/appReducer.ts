import { combineReducers } from "redux";

import allUsersReducer from "../users/duck/allUsersReducer";
import dataReducer from "../data/duck/dataReducer";

const appReducer = combineReducers({
    userState: allUsersReducer,
    dataState: dataReducer,
});

export default appReducer;