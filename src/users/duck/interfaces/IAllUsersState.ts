import ICellInfo from "../../interfaces/ICellInfo";

export default interface IAllUsersState {
    isLoading: boolean;
    users: string[];
    cellData: { [key: string]: ICellInfo; };
}