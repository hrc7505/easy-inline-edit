import AllUsersActionTypes from "../../actionTypes/AllUsersActionTypes";
import IAllUsersDataPayload from "./IAllUsersDataPayload";

export default interface IAllUsersLoadDataAction {
    type: AllUsersActionTypes.ALL_USERS_LOAD_DATA;
    payload: IAllUsersDataPayload;
}