import IUserModel from "../../models/IUserModel";

export default interface IListPropsFromDispatch {
    getData: () => void;
    updateModal: (userModal: IUserModel, editingIndex: number) => void;
    selectRowToEdit: (editingIndex: number) => void;
}