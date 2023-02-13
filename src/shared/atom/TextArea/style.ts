import styled from 'styled-components';
import { Input } from 'antd';
import '@constant/color/Color.css';
const { TextArea } = Input;

export const TextAreaInputContainer = styled(TextArea)`
  font-size: 16px;
  line-height: 22px;
  background: transparent;
  border-radius: 4px;
  color: #000;
  font-weight: 400;
`;

export const InputFormWrapper = styled.div<{ error: any }>`
  margin-bottom: 24px;
  width: 100%;
  .errormsg {
    color: red;
  }
  &.bottom-0 {
    margin-bottom: 0px;
  }
  .ant-input[disabled] {
    border: 1px solid #c4c4c4 !important;
    color: #000;
    background-color: #fff;
  }

  .ant-form-item-has-error .ant-input:focus {
    border: 1px solid #c4c4c4 !important;
    box-shadow: none;
  }

  .ant-form-item-has-error.ant-form-item-has-feedback .ant-form-item-children-icon {
    margin-top: -21px !important;
  }

  .on-success {
    border: 1px solid var(--color-system-green-green-6) !important;
  }
  .ant-input-textarea-show-count::after {
    float: left;
    color: rgba(123, 123, 151, 1);
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }
  textarea.ant-input {
    border-radius: 4px;
    border-color: ${(props: any) => (props.error ? '#c4c4c4' : ' #c4c4c4 !important')};
  }
`;
