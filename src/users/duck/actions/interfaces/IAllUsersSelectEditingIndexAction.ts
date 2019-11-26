import AllUsersActionTypes from "../../actionTypes/AllUsersActionTypes";
import IAllUsersSelectEditingIndexDataPayload from "./IAllUsersSelectEditingIndexDataPayload";

export default interface IAllUsersSelectEditingIndexAction {
    type: AllUsersActionTypes.ALL_USERS_SELECT_EDITING_INDEX;
    payload: IAllUsersSelectEditingIndexDataPayload;
}