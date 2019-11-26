import { IColumn } from "office-ui-fabric-react";
import IAllUsersKeyValuePair from "../../interfaces/IAllUsersKeyValuePair";
import IAllUsersEditedData from "../../interfaces/IAllUsersEditedData";

export default interface IAllUsersEditProps {
    /**
     * An item to be shown in non edit mode.
     */
    item: IAllUsersKeyValuePair;
     /**
     * Used in edit mode. On save this data will go for the update.
     */
    fieldItem: IAllUsersKeyValuePair;
    isLoading: boolean;
    isEditMode: boolean;
    itemIndex: number;
    column: IColumn;
    onChange: (fieldKey: string, value: boolean | string, index: number) => void;
    onActionBtnClick: (itemIndex: number) => void;
    updateEditedData: (data: IAllUsersEditedData) => void;
}