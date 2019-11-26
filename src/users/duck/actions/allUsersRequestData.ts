import IAllUsersRequestDataAction from "./interfaces/IAllUsersRequestDataAction";
import AllUsersActionTypes from "../actionTypes/AllUsersActionTypes";

const allUsersRequestData = (): IAllUsersRequestDataAction => ({
    type: AllUsersActionTypes.ALL_USERS_REQUEST_DATA
});

export default allUsersRequestData;