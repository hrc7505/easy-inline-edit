import IAllUsersSelectEditingIndexDataPayload from "./interfaces/IAllUsersSelectEditingIndexDataPayload";
import IAllUsersSelectEditingIndexAction from "./interfaces/IAllUsersSelectEditingIndexAction";
import AllUsersActionTypes from "../actionTypes/AllUsersActionTypes";

const allUsersSelectEditingIndex = (payload: IAllUsersSelectEditingIndexDataPayload): IAllUsersSelectEditingIndexAction => ({
    type: AllUsersActionTypes.ALL_USERS_SELECT_EDITING_INDEX,
    payload,
});

export default allUsersSelectEditingIndex;