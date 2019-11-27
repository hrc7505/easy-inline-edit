import IUserDetailsList from "../../detailsList/IUserDetailsList";
import ICellInfo from "./ICellInfo";

export default interface IListPropsFromState {
    isLoading: boolean;
    listItems: IUserDetailsList[];
    cellData: { [key: string]: ICellInfo; };
}