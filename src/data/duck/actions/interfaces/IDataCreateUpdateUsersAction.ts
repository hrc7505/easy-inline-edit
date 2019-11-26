import DataActionTypes from "../../actionTypes/dataActionTypes";
import IDataCreateUpdateDataPayload from "./IDataCreateUpdateDataPayload";
import IUserModel from "../../../../models/IUserModel";

export default interface IDataCreateUpdateUsersAction {
    type: DataActionTypes.DATA_CREATE_UPDATE_USERS;
    payload: IDataCreateUpdateDataPayload<IUserModel>;
} 