import { Dispatch } from "redux";

import IUserModel from "../../../models/IUserModel";
import dataCreateUpdateUsers from "../../../data/duck/actions/dataCreateUpdateUsers";
import allUsersSelectEditingIndex from "../actions/allUsersSelectEditingIndex";

const allUsersUpdateUser = (userModal: IUserModel, editingIndex: number) => (
    async (dispatch: Dispatch) => {
        dispatch(allUsersSelectEditingIndex({
            isRowLoading: true,
            editingIndex,
        }));
        const timeoutId = setTimeout(() => {
            // Delaying to show spinner in the screen.

            dispatch(allUsersSelectEditingIndex({
                isRowLoading: false,
                editingIndex: -1,
            }));

            // Dispatch models to data specific reducer
            dispatch(dataCreateUpdateUsers({
                data: { [userModal.id]: userModal }
            }));

            // Clearing timer.
            clearTimeout(timeoutId);
        }, 3000);
    }
);

export default allUsersUpdateUser;