import { Reducer } from "redux";

import IDataState from "./interfaces/IDataState";
import IDataCreateUpdateUsersAction from "./actions/interfaces/IDataCreateUpdateUsersAction";
import DataActionTypes from "./actionTypes/dataActionTypes";

type Action = IDataCreateUpdateUsersAction;

const initialState = {
    users: {}
};

const dataReducer: Reducer<IDataState, Action> =
    (state: IDataState | undefined, action: Action): IDataState => {
        switch (action.type) {
            case DataActionTypes.DATA_CREATE_UPDATE_USERS:
                return {
                    ...state,
                    users: {
                        ...(state as IDataState).users,
                        ...action.payload.data,
                    },
                };

            default:
                return state || initialState;
        };
    };

export default dataReducer;