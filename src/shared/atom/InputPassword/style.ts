import styled from 'styled-components';
import { Input } from 'antd';
import '@constant/color/Color.css';

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
  .ant-input-password {
    // background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
    border-bottom: 2px solid #666 !important;
    background-image: none !important;
    background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;

    &:hover {
      border: none !important;
      border-bottom: 2px solid #666 !important;
      outline: none !important ;
      box-shadow: none !important;
    }
    &:focus {
      border: none !important;
      outline: none;
      box-shadow: none;
    }
    &:active {
      border: none !important;
      outline: none;
      box-shadow: none;
    }
    .ant-input {
      border: none !important;
    }
  }
`;

export const PasswordFormInput = styled(Input.Password)`
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
    outline: none !important ;
    box-shadow: none !important;
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
