import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100% !important;
  .ant-slider {
    width: 95%;
    margin: var(--spacing-5) auto;
  }
  .ant-slider-track {
    background: var(--color-system-purple-purple-6) !important;
  }
  .ant-slider-handle {
    border-color: var(--color-system-purple-purple-6);
  }
  .ant-slider-handle:focus {
    border-color: var(--color-system-purple-purple-6);
    border: solid 2px var(--color-system-purple-purple-6);
  }
  .ant-slider-mark-text {
    font-size: 14px;
    line-height: 22px;
    color: var(--color-system-gray-gray-10);
  }
  .ant-slider-with-marks {
  }
  .ant-slider-mark {
    top: unset;
    bottom: 35px;
  }
`;
