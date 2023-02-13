import styled from 'styled-components';

export const Wrapper = styled.div<{ tableSize?: string }>`
  width: 100%;
  .ant-table-cell-scrollbar {
    display: none;
  }
  .ant-table {
    border: 1px solid var(--color-system-gray-gray-4);
    padding: var(--spacing-4);
    border-radius: 8px;
    max-width: 100%;
  }
  .ant-table-thead > tr > th {
    background: var(--color-system-gray-gray-1);
  }

  .ant-table-tbody > tr > td:last-child {
    width: 60px;
  }

  .ant-table-cell.ant-table-cell-scrollbar {
    display: none;
  }
  .ant-table-tbody > tr > td {
    gap: 10px;
    transition: background 0.3s;
  }
  table tr td.ant-table-selection-column {
    text-align: center;
  }
  .ant-table-thead > tr > th {
    color: rgba(23, 8, 45, 1);
    font-weight: 600;
    gap: 8px;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    background-color: transparent;
  }
  .ant-table-tbody > tr > td {
    font-size: 14px;
    line-height: 20px;
    color: var(--color-system-gray-gray-10);
    padding: 8px 16px;
  }

  .ant-pagination-item-active {
    background: #fff;
    border-color: transparent;
    font-size: 12px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-pagination-item-link {
    border: none;
  }
  .ant-table-thead th.ant-table-column-has-sorters:hover {
    background: #e2e6ee;
  }
  .ant-table-column-sorters {
    justify-content: flex-start;
  }
  .ant-table-column-sorter {
    color: rgba(23, 8, 45, 1);
    justify-content: flex-start;
  }
  .ant-table-column-title {
    flex: initial;
    margin-right: 9px;
    font-size: 14px;
    color: var(--color-system-gray-gray-10);
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
  }

  .NameTitle {
    display: block;
  }
  .ant-table-body {
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(226, 226, 238, 1);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(151, 146, 227, 1);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: rgba(151, 146, 227, 1);
    }
  }
  .ant-table-cell-scrollbar {
    box-shadow: none;
  }
`;
