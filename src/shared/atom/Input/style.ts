import styled from 'styled-components';
import { Input } from 'antd';
import '@constant/color/Color.css';

export const FormInput = styled(Input)`
  font-size: 16px;
  border: 1px solid #c4c4c4;
  background: transparent;
  border-radius: 4px;
  color: #000;
  font-weight: 400;
  line-height: 22px;
  padding: 6px 12px;
  height: 48px;
  &:hover {
    border: 1px solid #c4c4c4 !important;
    outline: none;
    box-shadow: none;
  }
  &:focus {
    border: 1px solid #c4c4c4 !important;
    outline: none;
    box-shadow: none;
  }
  &:active {
    border: 1px solid #c4c4c4 !important;
    outline: none;
    box-shadow: none;
  }
`;

export const InputFormWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  &.bottom-0 {
    margin-bottom: 0px;
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

  .ant-form-item-has-error.ant-form-item-has-feedback .ant-form-item-children-icon {
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
  .ant-form-item {
    margin-bottom: 0px;
  }
`;
