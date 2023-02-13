import styled from 'styled-components';
import '@constant/color/Color.css';

export const SquareWrapper = styled.div`
  .ant-radio-wrapper {
    border: 1px solid #b7b9cc;
    padding: 8px 15px;
    margin-bottom: 18px;
    margin-right: 15px;
    border-radius: 4px;
  }
`;

export const DefaultWrapper = styled.div`
  .ant-radio-inner {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 18px;
    height: 18px;
    background-color: #fff;
    border-color: #b7b9cc;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
    transition: all 0.3s;

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
  .ant-radio-checked .ant-radio-inner {
    background-color: #2d9cdb !important;
  }
  .ant-radio-checked .ant-radio-inner::after {
    background-color: #fff;
    border-color: #b7b9cc;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: #b7b9cc !important;
  }
  .ant-radio-wrapper {
    font-size: 18px !important;
  }
  .ant-radio {
    .ant-radio-inner {
      -webkit-transform: scale(1.1) !important;
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
`;
