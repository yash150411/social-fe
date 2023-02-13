import styled from 'styled-components';
import '@constant/color/Color.css';

export const Container = styled.div`
  .ant-switch-checked {
    background-color: #27ae60 !important;
    .ant-switch-handle {
      color: #fff;
      height: 12px;
      width: 12px;
      top: 2px;
    }
  }

  .ant-switch {
    background-color: #fff;
    border: 1px solid #c4c4c4;
    .ant-switch-handle:before {
      background-color: #e4dfdf;
      height: 12px;
      width: 12px;
      top: 2px;
    }
  }
`;
