import IDataCreateUpdateUsersAction from "./interfaces/IDataCreateUpdateUsersAction";
import IDataCreateUpdateDataPayload from "./interfaces/IDataCreateUpdateDataPayload";
import IUserModel from "../../../models/IUserModel";
import DataActionTypes from "../actionTypes/dataActionTypes";

const dataCreateUpdateUsers =
    (payload: IDataCreateUpdateDataPayload<IUserModel>): IDataCreateUpdateUsersAction => ({
        type: DataActionTypes.DATA_CREATE_UPDATE_USERS,
        payload,
    });

export default dataCreateUpdateUsers;