import styled from 'styled-components';
import '@constant/color/Color.css';

export const PillRadioWrapper = styled.div`
  margin-bottom: 18px;

  .chip-style {
    margin: 20px 10px 0px 0px;
    background: var(--color-system-gray-gray-19);
    color: var(--color-system-gray-gray-13);
    font-size: 12px;
    border-radius: 100px;
    border: none;
    outline: none;
  }

  .ant-radio-button-wrapper:not(:first-child)::before {
    background-color: transparent;
    outline: none;
  }

  .ant-radio-group-solid .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
    color: var(--color-system-gray-gray-1);
    background: var(--color-system-purple-purple-6);
    border-color: transparent;
    outline: none;
  }

  .ant-radio-button-wrapper {
    height: auto;
    padding: 5px 15px;
    line-height: inherit;
  }

  .font-style {
    margin-left: 8px;
    font-size: 10px;
  }
`;
