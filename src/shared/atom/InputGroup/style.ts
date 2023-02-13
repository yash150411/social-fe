import styled from 'styled-components';
import { Select } from 'antd';
import '@constant/color/Color.css';
import { DropdownIcon } from '@assets/index';
export const CustomSelect = styled(Select)`
  .ant-select-selector {
    border-radius: 8px 0px 0px 8px !important;
    margin-bottom: 0px;
    background-color: transparent !important;
    border-color: var(--color-system-gray-gray-16) !important;
  }
  .ant-select-arrow {
    top: 43%;
    margin-top: 0px;
    font-size: 10px;
    color: var(--color-system-gray-gray-13);
    right: 20px;
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
    padding: 7px 12px !important;
    line-height: 22px;
  }

  .ant-select-single:not(.ant-select-customize-input)
    .ant-select-selector
    .ant-select-selection-search-input {
    height: 44px;
  }
  .ant-select-selection-placeholder {
    color: var(--color-system-gray-gray-18);
    font-weight: 400;
  }
`;

export const InputFormWrapper = styled.div`

input{
  font-size: 12px;
  border: 1px solid var(--color-system-gray-gray-21);
  background: transparent;
  border-radius: 0px 8px 8px 0px !important;
  color: var(--color-system-gray-gray-17);
  font-weight: 500;
  line-height: 22px;
  padding:11px 12px;
  &:hover {
    border: 1px solid var(--color-system-purple-purple-6) !important;
    outline: none;
    box-shadow: none;
  }
  &:focus {
    border: 1px solid var(--color-system-purple-purple-6); !important;
    outline: none;
    box-shadow: none;
  }
  &:active {
    border: 1px solid var(--color-system-purple-purple-6); !important;
    outline: none;
    box-shadow: none;
  }
}

  margin-bottom: 18px;
  width: 100%;
  &.bottom-0{
    margin-bottom: 0px;
  }
  .errorClass{
    border-color:red;
    color:red !important;
  }

  .errorClass:hover{
    border-color:red !important;

  }
  .errormsg {
    color: red;
  }
  &.bottom-0 {
    margin-bottom: 0px;
  }
  .ant-input[disabled] {
    color: var(--color-system-gray-gray-18);
  }

  .ant-form-item-has-error .ant-input:focus {
    border-color: var(--color-system-red-red-5) !important;
    box-shadow: none;
  }

  .ant-form-item-has-error.ant-form-item-has-feedback
    .ant-form-item-children-icon {
    margin-top: -21px !important;
  }

  .on-success {
    border: 1px solid var(--color-system-green-green-6) !important;
  }
  .ant-input-affix-wrapper-disabled {
    border: solid 1px var(--color-system-gray-gray-5);
    background-color: var(--color-system-gray-gray-4);
  }
  .ant-input-prefix {
    margin-right: var(--spacing-3);
  }
  .ant-form-item{
    margin-bottom:0px;
  }
`;
