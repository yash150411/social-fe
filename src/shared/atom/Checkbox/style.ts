import styled from 'styled-components';
import { Checkbox } from 'antd';
import '@constant/color/Color.css';

export const CheckboxContainer = styled(Checkbox)`
  .ant-checkbox-checked .ant-checkbox-inner {
    color: #fff;
    border-color: #b7b9cc;
    background-color: #2d9cdb !important;
  }

  .ant-checkbox-checked::after {
    border-color: #b7b9cc;
  }

  .ant-checkbox-inner {
    display: block;
    width: 20px;
    height: 20px;
    &:hover {
      border: 1px solid #b7b9cc !important;
      outline: none;
      box-shadow: none;
    }
    &:focus {
      border: 1px solid #b7b9cc !important;
      outline: none;
      box-shadow: none;
    }
    &:active {
      border: 1px solid #b7b9cc !important;
      outline: none;
      box-shadow: none;
    }
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border: 1px solid #b7b9cc;
  }
`;
