import * as React from "react";
import { Toggle, TextField, Dropdown, IDropdownOption, ITextField, ProgressIndicator, IDropdown, IToggle } from 'office-ui-fabric-react';

import IAllUsersEditProps from "./interfaces/IAllUsersEditProps";
import ColumnKey from "../enums/ColumnKey";
import CommonUtils from "../../utils/CommonUtils";

export default class AllUsersEditComponent extends React.Component<IAllUsersEditProps> {
    private componentRef: IToggle | ITextField | IDropdown | null = null;

    public render() {
        const { column, isEditMode, item } = this.props;
        let compoToRender;

        switch (column.data) {
            case ColumnKey.ToggleField:
                compoToRender = !isEditMode
                    ? column.fieldName ? (item[column.fieldName] ? "Yes" : "No") : null
                    : this.renderToggleField();
                break;

            case ColumnKey.TextField:
                compoToRender = !isEditMode
                    ? (column.fieldName ? item[column.fieldName] : null)
                    : this.renderTextField();
                break;

            case ColumnKey.Dropdown:
                if (!isEditMode) {
                    const option = CommonUtils.getDropdownOptions(column.fieldName)
                        .find((option: IDropdownOption) => option.key === item[column.fieldName as string]);
                    compoToRender = option ? option.text : null;
                } else {
                    compoToRender = this.renderDropdownField();
                }
                break;

            default:
                compoToRender = null;
                break;
        }

        return (
            <div
                className={`customCell ${isEditMode ? "editMode" : ""}`}
                onClick={this.handleCellFocus}
            >
                {compoToRender}
                {this.props.isLoading &&
                    <ProgressIndicator
                        styles={{
                            root: {
                                position: "absolute",
                                top: "-8px",
                                width: "100%"
                            }
                        }}
                    />
                }
            </div>
        );
    }

    private setRef = (ref: IToggle | ITextField | IDropdown | null) => this.componentRef = ref;

    private handleBlur = (e?: React.FocusEvent<HTMLElement>) => {
        if (e) {
            e.preventDefault();
        }
        const { fieldName } = this.props.column;
        const hasValueChanged: boolean = fieldName
            ? this.props.item[fieldName] !== this.props.fieldItem[fieldName]
            : false;
        this.props.handleCellBlur(this.props.itemIndex, this.props.column.key, hasValueChanged);
    };

    private handleCellFocus = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        if (!this.props.isLoading) {
            if (!this.props.isEditMode) {
                this.props.updateEditedData({
                    [this.props.itemIndex]: { ...this.props.item, ...this.props.fieldItem ? this.props.fieldItem : {} }
                }, () => {
                    if (this.componentRef) {
                        this.componentRef.focus();
                    }
                });
            }
            this.props.handleCellFocus(this.props.itemIndex, this.props.column.key);
        }
    };

    private renderTextField = () => {
        const { itemIndex, fieldItem, column } = this.props;

        return (
            <TextField
                componentRef={this.setRef}
                value={column.fieldName ? fieldItem[column.fieldName] as string : ""}
                disabled={this.props.isLoading}
                onChange={(e, newValue?: string) => this.props.onChange(itemIndex, column.fieldName, newValue)}
                onBlur={this.handleBlur}
            />
        );
    };

    private renderDropdownField = () => {
        const { itemIndex, fieldItem, column } = this.props;

        return (
            <Dropdown
                componentRef={this.setRef}
                selectedKey={column.fieldName ? fieldItem[column.fieldName] as string : ""}
                placeholder="Select an item"
                disabled={this.props.isLoading}
                options={CommonUtils.getDropdownOptions(column.fieldName)}
                onChange={(e: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, i?: number) =>
                    this.props.onChange(itemIndex, column.fieldName, option && option.key)}
                onBlur={this.handleBlur}
                styles={{ dropdown: { width: 200 } }}
            />
        );
    };

    private renderToggleField = () => {
        const { itemIndex, fieldItem, column } = this.props;

        return (
            <Toggle
                componentRef={this.setRef}
                checked={column.fieldName ? fieldItem[column.fieldName] as boolean | undefined : false}
                disabled={this.props.isLoading}
                onText="Yes"
                offText="No"
                onChange={(e, checked?: boolean) => this.props.onChange(itemIndex, column.fieldName, checked)}
                onBlur={this.handleBlur}
                styles={{ root: { marginBottom: 0 } }}
            />
        );
    };
}