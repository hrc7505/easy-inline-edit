import { Dispatch } from "redux";

import IUserModel from "../../../models/IUserModel";
import dataCreateUpdateUsers from "../../../data/duck/actions/dataCreateUpdateUsers";
import allUsersSelectCellToEdit from "../actions/allUsersSelectCellToEdit";

const allUsersUpdateUser = (userModal: IUserModel, itemIndex: number, columnKey: string) => (
    async (dispatch: Dispatch) => {
        dispatch(allUsersSelectCellToEdit({
            isCellLoading: true,
            itemIndex,
            columnKey,
            isEditMode: true,
        }));
        const timeoutId = setTimeout(() => {
            // Delaying to show spinner in the screen.

            dispatch(allUsersSelectCellToEdit({
                isCellLoading: false,
                itemIndex,
                columnKey,
                isEditMode: false,
            }));

            // Dispatch models to data specific reducer
            dispatch(dataCreateUpdateUsers({
                data: { [userModal.id]: userModal }
            }));

            // Clearing timer.
            clearTimeout(timeoutId);
        }, 10000);
    }
);

export default allUsersUpdateUser;