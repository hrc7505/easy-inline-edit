import AllUsersActionTypes from "../../actionTypes/AllUsersActionTypes";
import IAllUsersSelectCellToEditDataPayload from "./IAllUsersSelectCellToEditDataPayload";

export default interface IAllUsersSelectCellToEditAction {
    type: AllUsersActionTypes.ALL_USERS_SELECT_CELL_TO_EDIT;
    payload: IAllUsersSelectCellToEditDataPayload;
}