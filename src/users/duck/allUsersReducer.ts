import { Reducer } from "redux";

import IAllUsersRequestDataAction from "./actions/interfaces/IAllUsersRequestDataAction";
import IAllUsersLoadDataAction from "./actions/interfaces/IAllUsersLoadDataAction";
import IAllUsersState from "./interfaces/IAllUsersState";
import AllUsersActionTypes from "./actionTypes/AllUsersActionTypes";
import IAllUsersSelectEditingIndexAction from "./actions/interfaces/IAllUsersSelectEditingIndexAction";

type Action = IAllUsersRequestDataAction | IAllUsersLoadDataAction | IAllUsersSelectEditingIndexAction;

const initialState: IAllUsersState = {
    isLoading: false,
    users: [],
    isRowLoading: false,
    editingIndex: -1,
};

const allUsersReducer: Reducer<IAllUsersState, Action> =
    (state: IAllUsersState = initialState, action: Action): IAllUsersState => {
        switch (action.type) {
            case AllUsersActionTypes.ALL_USERS_REQUEST_DATA:
                return {
                    ...state,
                    isLoading: true,
                };

            case AllUsersActionTypes.ALL_USERS_LOAD_DATA:
                return {
                    ...state,
                    isLoading: false,
                    users: action.payload.users,
                };

            case AllUsersActionTypes.ALL_USERS_SELECT_EDITING_INDEX:
                return {
                    ...state,
                    isRowLoading: action.payload.isRowLoading,
                    editingIndex: action.payload.editingIndex,
                };

            default:
                return state;
        }
    };

export default allUsersReducer;