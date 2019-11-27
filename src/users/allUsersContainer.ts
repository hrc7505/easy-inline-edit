import { MapStateToProps, MapDispatchToProps, connect, ConnectedComponent } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

import IAllUsersPropsFromState from "./interfaces/IAllUsersPropsFromState";
import IAppState from "../duck/interfaces/IAppState";
import IAllUsersPropsFromDispatch from "./interfaces/IAllUsersPropsFromDispatch";
import allUsersGetUsers from "./duck/operations/allUsersGetUsers";
import IAllUsersProps from "./interfaces/IAllUsersProps";
import AllUsersComponent from "./allUsersComponent";
import IData from "../data/duck/interfaces/IData";
import IUserModel from "../models/IUserModel";
import allUsersUpdateUser from "./duck/operations/allUsersUpdateUser";
import allUsersSelectCellToEdit from "./duck/actions/allUsersSelectCellToEdit";
import IUserDetailsList from "../detailsList/IUserDetailsList";
import IAllUsersSelectCellToEditDataPayload from "./duck/actions/interfaces/IAllUsersSelectCellToEditDataPayload";

// Todo: Should use selector to memoize below function.
const getUsers = (ids: string[], users: IData<IUserModel>) => {
    if (ids && Object.keys(users).length > 0) {
        return ids.map((id: string): IUserDetailsList => {
            return {
                id: users[id].id,
                isSocialUser: users[id].isSocialUser,
                name: users[id].name,
                role: users[id].role,
                isAgreed: users[id].isAgreed,
                email: users[id].email,
                city: users[id].city,
            };
        });
    }

    return [];
};

const mapStateToProps: MapStateToProps<IAllUsersPropsFromState, object, IAppState> =
    (state: IAppState): IAllUsersPropsFromState => ({
        isLoading: state.userState.isLoading,
        listItems: getUsers(state.userState.users, state.dataState.users),
        cellData: state.userState.cellData,
    });

const mapDispatchToProps: MapDispatchToProps<IAllUsersPropsFromDispatch, object> =
    (dispatch: ThunkDispatch<IAppState, void, Action>): IAllUsersPropsFromDispatch => ({
        getData: () => dispatch(allUsersGetUsers()),
        updateModal: (userModal: IUserModel, editingIndex: number, columnKey: string) =>
            dispatch(allUsersUpdateUser(userModal, editingIndex, columnKey)),
        selectCellToEdit: (payload: IAllUsersSelectCellToEditDataPayload) =>
            dispatch(allUsersSelectCellToEdit(payload))
    });

const AllUsersContainer: ConnectedComponent<typeof AllUsersComponent, Pick<IAllUsersProps, never> & object> =
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(AllUsersComponent);

export default AllUsersContainer;

