import styled from 'styled-components';
export const SearchableSelectContainer = styled.div<{ error: any }>`
  input {
    font-size: 14px;
    line-height: 12px;
    background: transparent;
    color: var(--color-system-gray-gray-17);
    font-weight: 500;
    border: none;
    padding-left: 0px;
  }
  .ant-input-affix-wrapper {
    font-size: 14px;
    padding: 11px 12px;
    border-radius: 8px;
    border-color: ${(props: any) =>
      props.error
        ? 'var(--color-system-red-red-5) !important'
        : ' var(--color-system-gray-gray-21) !important'};
  }

  .ant-select-selector {
    width: 100%;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-search-input {
    border: 1px solid #c4c4c4;
    background: transparent;
    border-radius: 4px;
    color: #000;
    font-weight: 400;
    line-height: 22px;
    padding: 6px 12px;
    height: 48px;
  }
`;
