import * as React from 'react';
import { ShimmeredDetailsList, IColumn, SelectionMode } from 'office-ui-fabric-react';

import IAllUsersProps from './interfaces/IAllUsersProps';
import IUserModel from '../models/IUserModel';
import CommonUtils from '../utils/CommonUtils';
import AllUsersEditComponent from './allUsersEdit/allUsersEditComponent';
import IAllUsersEditedData from './interfaces/IAllUsersEditedData';
import IAllUsersKeyValuePair from './interfaces/IAllUsersKeyValuePair';
import ICellInfo from './interfaces/ICellInfo';

import "./allUsersStyle.css";

export default class AllUsersComponent extends React.Component<IAllUsersProps> {
  private editedData: IAllUsersEditedData = {};

  public render() {
    return (
      <div style={{ width: "100%", border: "1px solid #f3f2f1" }}>
        <ShimmeredDetailsList
          items={this.props.listItems}
          setKey="set"
          columns={CommonUtils.getColumns()}
          onRenderItemColumn={this.renderItemColumn}
          enableShimmer={this.props.isLoading}
          selectionMode={SelectionMode.none}
        />
      </div>
    );
  }

  public componentDidMount() {
    this.props.getData();
  }

  /**
   * Handles onchange
   */
  private onChange = (index: number, key?: string, value?: boolean | string | number) => {
    if (key) {
      this.editedData = {
        ...this.editedData,
        [index]: {
          ...this.editedData[index],
          [key]: value,
        }
      };

      this.forceUpdate();
    }
  }

  private updateEditedData = (data: IAllUsersEditedData, callBackFun?: () => void) => {
    this.editedData = { ...this.editedData, ...data };
    this.forceUpdate(callBackFun);
  }


  private handleCellFocus = (itemIndex: number, columnKey: string) => {
    this.props.selectCellToEdit({
      itemIndex,
      columnKey,
      isCellLoading: false,
      isEditMode: true,
    });
  }

  private handleCellBlur = (itemIndex: number, columnKey: string, hasValueChanged: boolean) => {
    if (hasValueChanged) {
      this.props.updateModal(this.editedData[itemIndex] as unknown as IUserModel, itemIndex, columnKey);
    } else {
      this.props.selectCellToEdit({
        itemIndex,
        columnKey,
        isCellLoading: false,
        isEditMode: false,
      });
    }
  }

  private renderItemColumn = (item: IAllUsersKeyValuePair, index?: number, c?: IColumn): React.ReactNode => {
    const column: IColumn = c as IColumn;
    const cellInfo: ICellInfo = this.props.cellData[column.key + index]
      ? this.props.cellData[column.key + index]
      : {} as ICellInfo;

    return (
      <AllUsersEditComponent
        itemIndex={index as number}
        item={item}
        column={column}
        isEditMode={cellInfo.isEditMode}
        onChange={this.onChange}
        fieldItem={this.editedData[index as number]}
        updateEditedData={this.updateEditedData}
        isLoading={cellInfo.isCellLoading}
        handleCellFocus={this.handleCellFocus}
        handleCellBlur={this.handleCellBlur}
      />
    );
  }
}