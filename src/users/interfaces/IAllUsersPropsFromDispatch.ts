import IUserModel from "../../models/IUserModel";
import IAllUsersSelectCellToEditDataPayload from "../duck/actions/interfaces/IAllUsersSelectCellToEditDataPayload";

export default interface IListPropsFromDispatch {
    getData: () => void;
    updateModal: (userModal: IUserModel, itemIndex: number, columnKey: string) => void;
    selectCellToEdit: (payload: IAllUsersSelectCellToEditDataPayload) => void;
}