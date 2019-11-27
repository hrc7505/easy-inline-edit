import * as React from "react";
import { IColumn, IDropdownOption, ColumnActionsMode } from "office-ui-fabric-react";

import IUserModel from "../models/IUserModel";
import ColumnKey from "../users/enums/ColumnKey";

const getRandomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

export default class CommonUtils {
    public static getColumns(): IColumn[] {
        return [
            {
                key: "index",
                name: "#",
                fieldName: "index",
                minWidth: 40,
                maxWidth: 40,
                columnActionsMode: ColumnActionsMode.disabled,
                onRender: (item?: IUserModel, index?: number, column?: IColumn) =>
                    <div className="customCell">{(index as number) + 1}</div>,
                className: "cellContainer",
            },
            {
                key: "isSocial",
                // * Using data key to show control(TextField, ToggleField etc)
                data: ColumnKey.ToggleField,
                name: "Is Social?",
                fieldName: "isSocial",
                minWidth: 100,
                maxWidth: 100,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
                className: "cellContainer",
            },
            {
                key: "name",
                // * Using data key to show control(TextField, ToggleField etc)
                data: ColumnKey.TextField,
                name: "Name",
                fieldName: "name",
                minWidth: 100,
                maxWidth: 150,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
                className: "cellContainer",
            },
            {
                key: "role",
                // * Using data key to show control(TextField, ToggleField etc)
                data: ColumnKey.Dropdown,
                name: "Role",
                fieldName: "role",
                minWidth: 200,
                maxWidth: 200,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
                className: "cellContainer",
            },
            {
                key: "isAgreed",
                // * Using data key to show control(TextField, ToggleField etc)
                data: ColumnKey.ToggleField,
                name: "Is Agreed?",
                fieldName: "isAgreed",
                minWidth: 100,
                maxWidth: 100,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
                className: "cellContainer",
            },
            {
                key: "email",
                // * Using data key to show control(TextField, ToggleField etc)
                data: ColumnKey.TextField,
                name: "Email",
                fieldName: "email",
                minWidth: 100,
                maxWidth: 150,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
                className: "cellContainer",
            },
            {
                key: "city",
                // * Using data key to show control(TextField, ToggleField etc)
                data: ColumnKey.Dropdown,
                name: "City",
                fieldName: "city",
                minWidth: 200,
                maxWidth: 200,
                columnActionsMode: ColumnActionsMode.disabled,
                isResizable: true,
                className: "cellContainer",
            },
        ];
    }

    public static getDropdownOptions(fieldName?: string): IDropdownOption[] {
        if (fieldName === "role") {
            return [
                { key: 'qc', text: 'QC' },
                { key: 'nde', text: 'NDE' },
                { key: 'siteadmin', text: 'Site Admin' },
            ];
        }

        if (fieldName === "city") {
            return [
                { key: 'msn', text: 'Mehsana' },
                { key: 'ahm', text: 'Ahmedabad' },
                { key: 'del', text: 'Delhi' },
                { key: 'gan', text: 'Gandhinagar' },
            ];
        }

        return [
            { key: 'yes', text: 'Yes' },
            { key: 'no', text: 'No' },
            { key: 'none', text: 'None' },
        ];
    }

    public static getRandomItems(): IUserModel[] {
        const toggleValues = [true, false];
        const textFieldValues = ["Hardik Chaudhari", "Haresh Kalyani", "Keyur Belani", "Nikunj Mistry", "Jhon Doe", "Ramesh Oza", "Harsimrat Thukral", "Martha Thukral", "Sherwin Kong", "Jigar Paladiya", "Sundar Gada", "Dhaval Shah", "Sagar Chauhan"];
        const roles = ["qc", "nde", "siteadmin"];
        const cities = ["msn", "ahm", "del", "gan"];

        const items: IUserModel[] = [];
        for (let i = 0; i < 3; i++) {
            items.push({
                id: "u-" + i.toString(),
                isSocialUser: getRandomItem(toggleValues),
                name: getRandomItem(textFieldValues),
                role: getRandomItem(roles),
                isAgreed: getRandomItem(toggleValues),
                email: "user" + i + "@user.com",
                city: getRandomItem(cities),
                address: "00" + i + ", Nigam Nagar",
                createdAt: "",
                createdBy: "Hardik Chaudhari",
                updatedAt: "",
                updatedBy: "",
            });
        }

        return items;
    }
}