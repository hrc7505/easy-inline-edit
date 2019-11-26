import { Dispatch } from "redux";

import allUsersRequestData from "../actions/allUsersRequestData";
import allUsersLoadData from "../actions/allUsersLoadData";
import IUserModel from "../../../models/IUserModel";
import CommonUtils from "../../../utils/CommonUtils";
import IDataCreateUpdateDataPayload from "../../../data/duck/actions/interfaces/IDataCreateUpdateDataPayload";
import dataCreateUpdateUsers from "../../../data/duck/actions/dataCreateUpdateUsers";

const allUsersGetUsers = () => (
    async (dispatch: Dispatch) => {
        // Request data
        dispatch(allUsersRequestData());
        const timeoutId = setTimeout(() => {
            // Delaying to show spinner in the screen.

            // Random item list.
            const items: IUserModel[] = CommonUtils.getRandomItems();

            // Dispatch ids to component specific reducer
            dispatch(allUsersLoadData({
                users: items.map((item: IUserModel) => item.id)
            }));

            const payload: IDataCreateUpdateDataPayload<IUserModel> = {
                data: {}
            };

            items.forEach((user: IUserModel): void => {
                payload.data[user.id] = user;
            });

            // Dispatch models to data specific reducer
            dispatch(dataCreateUpdateUsers(payload));

            // Clearing timer.
            clearTimeout(timeoutId);
        }, 3000);
    }
);

export default allUsersGetUsers;