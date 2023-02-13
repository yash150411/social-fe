import styled from 'styled-components';
import { Select } from 'antd';
import { DropdownIcon } from '@assets/index';
import SearchIcon from '@assets/search.svg';
import '@constant/color/Color.css';

export const InputFormWrapperForMultiCheckBox = styled.div<{ error: any }>`
  .ant-select-selector {
    padding: 8px 12px !important;
    height: auto !important ;
    border: 1px solid;
    border-color: ${(props: any) => (props.error ? '#cdcdcd !important' : ' #cdcdcd !important')};
    border-radius: 4px !important;
  }

  .ant-select-clear {
    opacity: 1 !important;
  }

  .ant-select-arrow {
    top: 43%;
    display: block;
    margin-top: 0px;
    font-size: 10px;
    color: #000;
    font-weight: bold;
    right: 20px;
  }

  .errormsg {
    margin-bottom: 18px;
    display: block;
  }

  .ant-select-selection-item {
    padding: 3px 16px;
    font-size: 16px;
    font-weight: 400;
    font-stretch: normal;
    display: flex;
    align-items: center;
    height: auto;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    margin-left: 8px;
    color: #000;
    border-radius: 23px;
    border: solid 1px #cdcdcd;
    background-color: #fff;

    @media (max-width: 768px) {
      .ant-select-selection-item {
        font-size: 14px !important;
      }
    }
  }
  .ant-select-multiple .ant-select-selection-item-remove {
    color: #000 !important;
  }
  .ant-select-multiple .ant-select-selection-item-content {
    color: #000 !important;
    max-width: 555px !important;
    font-size: 12px;
    span {
      display: none;
    }
  }
  .ant-select-selection-overflow {
    flex: unset !important;
    max-width: 100% !important;

    width: 100%;
  }
  .ant-select-multiple .ant-select-selection-search {
    overflow: hidden;
  }

  .ant-select-tree .ant-select-tree-node-content-wrapper:hover {
    background-color: none !important;
  }
  .ant-select-tree .ant-select-tree-treenode {
    background-color: transparent;
    padding: 6px 0px;
  }
  .ant-select-dropdown {
    padding-left: 0px;
    padding-right: 0px;
  }
  .ant-select-tree .ant-select-tree-treenode:hover {
    background-color: rgba(228, 168, 83, 0.5) !important;
  }
  .ant-select-tree-checkbox-inner {
    border: 2px solid #000;
  }
  .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
    background-color: #1890ff;
    border-color: #1890ff;
    border: none !important;
  }
  .ant-btn-ghost:hover {
    color: #000 !important;
  }
  .ant-btn-ghost {
    padding: 0;
  }
  .ant-select-selection-item {
    border: none;
    background-color: #f4f4f4 !important;
    padding: 4px !important;
    border: none !important;

    position: relative !important;
    padding-left: 8px !important;
    border-radius: 4px;
    cursor: default;
    float: left;
    margin-right: 2px;
    margin-top: 3px;
    margin-left: 5px;
  }
  .ant-select-tree .ant-select-tree-node-content-wrapper:hover {
    background-color: transparent !important;
  }
`;

export const InputFormWrapper = styled.div`
  margin-bottom: 24px;
  @media (max-width: 600px) {
    margin-bottom: 18px !important;
  }
  &.bottom-0 {
    margin-bottom: 0px;
    @media (max-width: 600px) {
      margin-bottom: 18px !important;
    }
  }
  &.rightradius0 .ant-select-selector {
    border-radius: 8px 0px 0px 8px !important;
  }
  width: 100%;
  .errormsg {
    color: red;
  }

  .ant-select-clear {
    opacity: 1 !important;
  }

  .ant-select-multiple .ant-select-selection-item {
    font-size: 16px !important;
    line-height: 22px;
    border-radius: 4px;
    background: #f4f4f4 !important;
    box-sizing: content-box;
    @media (max-width: 768px) {
      .ant-select-multiple .ant-select-selection-item {
        font-size: 14px !important;
      }
    }
  }
  .ant-select-multiple input {
    padding: 0px 0px !important;
  }
  .ant-select-multiple .ant-select-selection-item-remove > .anticon svg {
    color: #000;
  }
  .ant-select-multiple .ant-select-selection-search {
    margin-left: 0px !important;
  }
  &.showSearch .ant-select-selector::before {
    content: url(${SearchIcon});
    display: flex;
    align-items: center;
    padding-right: 8px;
  }
  &.showSearch .ant-select-selection-search-input {
    padding-left: 16px !important;
  }

  .errorClass {
    border-color: red;
    color: red !important;
  }

  .errorClass:hover {
    border-color: red !important;
  }
  .errormsg {
    color: red;
  }
  .ant-select {
    height: auto;
    display: flex;
  }
  .anticon-search {
    display: none !important;
  }
`;
export const CustomInput = styled(Select)<{ error: any }>`
  .ant-select-selector {
    border-radius: 4px !important;
    margin-bottom: 0px;
    border-color: ${(props: any) => (props.error ? '#f5222d !important' : ' #bdbdd3 !important')};
  }
  .ant-select-arrow {
    top: 35%;
    margin-top: 0px;
    font-size: 10px;
    color: #000;
    right: 10px;
  }
  input {
    padding: 12px 0px !important;
    height: auto !important;
  }
  .ant-select-multiple .ant-select-selection-search-input {
    width: 100%;
    padding: 0px 0px !important;
    min-width: 100%;
  }

  .anticon.anticon-down {
    background: url(${DropdownIcon}) no-repeat;
    display: block;
    width: 14px;
    height: 10px;
  }
  .anticon.anticon-down svg {
    display: none;
  }
  .ant-select-selector {
    width: 100%;
    height: auto !important;
    padding: 8px 12px !important;
    line-height: 22px;
  }

  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    //height: 44px;
  }
  .ant-select-selection-placeholder {
    color: #c4c4c4;
    font-size: 15px !important;
    font-weight: 500;
  }

  .ant-select-multiple .ant-select-selection-item {
    background-color: #f4f4f4 !important;
  }

  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    background-color: #ddd !important;
  }

  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {
    background-color: rgba(228, 168, 83, 0.5) !important;
  }

  .ant-select-multiple .ant-select-selection-item {
    font-size: 16px !important;
    line-height: 22px;
    border-radius: 4px;
    background: #f4f4f4 !important;
  }
`;
