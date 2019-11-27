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
    onChange: (index: number, fieldKey?: string, value?: boolean | string | number) => void;
    handleCellFocus: (itemIndex: number, columnKey: string) => void;
    handleCellBlur: (itemIndex: number, columnKey: string, hasValueChanged: boolean) => void;
    updateEditedData: (data: IAllUsersEditedData, callBackFun?: () => void) => void;
}