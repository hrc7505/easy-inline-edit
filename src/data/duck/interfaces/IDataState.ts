import IData from "./IData";
import IUserModel from "../../../models/IUserModel";

export default interface IDataState {
    users: IData<IUserModel>;
}