import IAllUsersState from "../../users/duck/interfaces/IAllUsersState";
import IDataState from "../../data/duck/interfaces/IDataState";

export default interface IAppState {
    userState: IAllUsersState,
    dataState: IDataState,
}