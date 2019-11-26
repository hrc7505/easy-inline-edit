import * as React from "react";
import { Toggle, TextField, Dropdown, IDropdownOption, ActionButton, Spinner, SpinnerSize } from 'office-ui-fabric-react';

import IAllUsersEditProps from "./interfaces/IAllUsersEditProps";
import ColumnKey from "../enums/ColumnKey";
import CommonUtils from "../../utils/CommonUtils";

export default class AllUsersEditComponent extends React.Component<IAllUsersEditProps> {
    public render() {
        const { itemIndex: index, column, isEditMode, item, fieldItem: itemToShow } = this.props;
        let compoToRender;

        const fieldName = column.fieldName as string;
        switch (column.data) {
            case ColumnKey.ToggleField:
                compoToRender = (
                    !isEditMode
                        ? item[fieldName] ? "Yes" : "No"
                        : <Toggle
                            checked={itemToShow[fieldName] as boolean}
                            onText="Yes"
                            offText="No"
                            onChange={(e, checked?: boolean) => this.props.onChange(fieldName, checked as boolean, index)}
                        />
                );
                break;

            case ColumnKey.TextField:
                compoToRender = (
                    !isEditMode
                        ? item[fieldName]
                        : <TextField
                            value={itemToShow[fieldName] as string}
                            onChange={(e, newValue?: string) => this.props.onChange(fieldName, newValue as string, index)}
                        />
                );
                break;

            case ColumnKey.Dropdown:
                if (!isEditMode) {
                    const option = CommonUtils.getDropdownOptions(fieldName)
                        .find((option: IDropdownOption) => option.key === item[fieldName]);
                    return option ? option.text : null;
                }

                compoToRender = (
                    <Dropdown
                        selectedKey={itemToShow[fieldName] as string}
                        onChange={(e, option?: IDropdownOption, i?: number) =>
                            this.props.onChange(fieldName, (option as IDropdownOption).key as string, index)}
                        placeholder="Select an item"
                        options={CommonUtils.getDropdownOptions(fieldName)}
                        styles={{ dropdown: { width: 200 } }}
                    />
                );
                break;

            case ColumnKey.Edit:
                compoToRender = this.props.isLoading
                    ? (
                        <Spinner
                            label="Saving..."
                            labelPosition="right"
                            styles={{ root: { justifyContent: "flex-start" } }}
                            size={SpinnerSize.small}
                        />
                    )
                    : (
                        <ActionButton
                            iconProps={{ iconName: !isEditMode ? 'edit' : "save" }}
                            styles={{ root: { height: "20px" } }}
                            onClick={this.handleActionBtnClick}
                        >
                            {!isEditMode ? "Edit" : "Save"}
                        </ActionButton>
                    );
                break;

            default:
                compoToRender = null;
                break;
        }

        return (
            <div style={{ pointerEvents: this.props.isLoading ? "none" : "auto", opacity: this.props.isLoading ? 0.5 : 1 }}>
                {compoToRender}
            </div>
        );
    }

    private handleActionBtnClick = () => {
        if (!this.props.isEditMode) {
            this.props.updateEditedData({
                [this.props.itemIndex]: this.props.item
            });
        }
        this.props.onActionBtnClick(this.props.itemIndex);
    }
}