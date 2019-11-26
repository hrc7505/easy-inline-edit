import IAllUsersDataPayload from "./interfaces/IAllUsersDataPayload";
import IAllUsersLoadDataAction from "./interfaces/IAllUsersLoadDataAction";
import AllUsersActionTypes from "../actionTypes/AllUsersActionTypes";

const allUsersLoadData = (payload: IAllUsersDataPayload): IAllUsersLoadDataAction => ({
    type: AllUsersActionTypes.ALL_USERS_LOAD_DATA,
    payload,
});

export default allUsersLoadData;