import { Reducer } from "redux";

import IAllUsersRequestDataAction from "./actions/interfaces/IAllUsersRequestDataAction";
import IAllUsersLoadDataAction from "./actions/interfaces/IAllUsersLoadDataAction";
import IAllUsersState from "./interfaces/IAllUsersState";
import AllUsersActionTypes from "./actionTypes/AllUsersActionTypes";
import IAllUsersSelectCellToEditAction from "./actions/interfaces/IAllUsersSelectCellToEditAction";

type Action = IAllUsersRequestDataAction | IAllUsersLoadDataAction | IAllUsersSelectCellToEditAction;

const initialState: IAllUsersState = {
    isLoading: false,
    users: [],
    cellData: {}
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

            case AllUsersActionTypes.ALL_USERS_SELECT_CELL_TO_EDIT:
                return {
                    ...state,
                    cellData: {
                        ...state.cellData,
                        [action.payload.columnKey + action.payload.itemIndex]: {
                            isCellLoading: action.payload.isCellLoading,
                            itemIndex: action.payload.itemIndex,
                            columnKey: action.payload.columnKey,
                            isEditMode: action.payload.isEditMode,
                        },
                    },
                };

            default:
                return state;
        }
    };

export default allUsersReducer;