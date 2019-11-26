import IUserDetailsList from "../../detailsList/IUserDetailsList";

export default interface IListPropsFromState {
    isLoading: boolean;
    listItems: IUserDetailsList[];
    editingIndex: number;
    isRowLoading: boolean;
}