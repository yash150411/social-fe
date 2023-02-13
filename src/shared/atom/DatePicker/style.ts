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
      props.error ? '1px solid #ff4d4f !important' : '1px solid #c4c4c4 !important'};
    background: transparent;
    border-radius: 4px;
    color: #b5b5b5;
    font-weight: 500;
    line-height: 22px;
    width: 100%;
    height: 48px;

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
  }

  .ant-picker-suffix {
    color: #000;
  }
  .anticon.anticon-calendar svg {
    display: none;
  }
  .anticon.anticon-calendar {
    background: url(${DatepickerIcon}) no-repeat;
    display: block;
    width: 40px;
    height: 24px;
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
  .ant-picker-footer {
    border: none !important;
    .ant-picker-today-btn {
      display: none !important;
    }
  }
`;
