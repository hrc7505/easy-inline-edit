import IAllUsersSelectCellToEditDataPayload from "./interfaces/IAllUsersSelectCellToEditDataPayload";
import IAllUsersSelectCellToEditAction from "./interfaces/IAllUsersSelectCellToEditAction";
import AllUsersActionTypes from "../actionTypes/AllUsersActionTypes";

const allUsersSelectCellToEdit = (payload: IAllUsersSelectCellToEditDataPayload): IAllUsersSelectCellToEditAction => ({
    type: AllUsersActionTypes.ALL_USERS_SELECT_CELL_TO_EDIT,
    payload,
});

export default allUsersSelectCellToEdit;