import styled from 'styled-components';
import { DatepickerIcon } from '@assets/index';
import '@constant/color/Color.css';

export const Content = styled.div<{ error: any }>`
  margin-bottom: 18px;
  &.bottom-0 {
    margin-bottom: 0px;
  }
  .ant-picker {
    font-size: 16px;
    padding: 6px 12px;
    border: ${(props: any) =>
      props.error ? '1px solid #c4c4c4 !important' : '1px solid #c4c4c4 !important'};
    background: transparent;
    border-radius: 4px;
    color: #000;
    font-weight: 500;
    line-height: 22px;
    width: 100%;
    height: 48px;
    margin-bottom: 18px;
  }
  .ant-picker-suffix {
    color: #000;
  }
  .anticon.anticon-calendar svg {
    display: none;
  }
  .ant-picker-dropdown {
    width: auto;
  }
  .ant-picker-panel {
    width: 100%;
  }

  input {
    &::placeholder {
      color: #c4c4c4;
      font-weight: 400;
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 18px !important;
  }
  @media (max-width: 768px) {
    .ant-picker {
      margin-bottom: 0px;
    }
  }

  @media (max) .ant-picker-suffix {
    display: none !important;
  }
`;
export const TimePickerWrapper = styled.div`
  .ant-btn {
    &:focus {
      color: #fff !important;
      border-color: #1890ff !important;
      background: #1890ff !important;
    }
    &:hover {
      color: #fff !important;
      border-color: #1890ff !important;
      background: #1890ff !important;
    }
  }
`;
