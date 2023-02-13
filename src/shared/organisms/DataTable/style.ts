import styled from 'styled-components';
import '@constant/spacing/Spacing.css';
import '@constant/color/Color.css';

// export const LoadMoreContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 96%;
//   position: absolute;
//   background-color: white;
//   bottom: 0;
//   opacity: 0.8;
//   padding-top: 16px;
// `;

// export const LoadMoreContainerList = styled.div`
//   display: flex;
//   justify-content: center;
//   position: absolute;
//   background-color: white;
//   bottom: 0;
//   opacity: 0.8;
//   padding-top: 16px;
//   margin-top: -50px;
//   width: 96%;
// `;

export const TableContainer = styled.div`
  position: relative;
  width: 100%;

  .ant-table-empty .ant-table-placeholder {
    display: none;
  }
  ${(props: { showCustomEmpty: boolean }) => {
    return (
      props.showCustomEmpty &&
      `
        position: relative;

.ant-empty-image{
    display:none;
}
.ant-empty-description{
    display:none;
}
`
    );
  }}

  .ant-pagination-simple-pager {
    position: absolute;
    right: 74px;
  }
  .ant-pagination-item-link{
    margin:0px
  }
  .ant-pagination-item-link svg{
    font-size:16px;s
  }
  .ant-pagination-simple .ant-pagination-simple-pager input{
    border:none;
    padding:0px;
    margin:0px
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Wrapper = styled.div`
  .ant-table-cell {
    text-align: left;
  }
  .amendedRow {
    border: 1px solid #1890ff;
    background-color: #f0f5ff;
  }

  .dealDashboardRow {
    cursor: pointer;
  }

  width: 100%;
  max-width: 100%;

  &.fixTD .ant-table-thead > tr > th {
    min-width: 150px;
    width: 150px;
  }
  &.fixTD .ant-table-tbody > tr > td {
    min-width: 150px;
    width: 150px;
  }

  &.fixTD .ant-table {
    width: 100%;
  }
  .ant-table {
    border-radius: var(--spacing-2);
    overflow: auto;
    min-height: 260px;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-left-radius: var(--spacing-2);
  }
  .ant-table table {
    width: 100% !important;
    max-width: 100% !important;
    table-layout: unset !important;
  }
  .ant-table-cell-scrollbar {
    display: none;
  }

  .ant-table-tbody > tr > td {
    gap: 10px;
    transition: background 0.3s;
  }
  .ant-table-cell.ant-table-cell-scrollbar {
    display: none;
  }

  table tr td.ant-table-selection-column {
    text-align: center;
  }
  .ant-table-thead > tr > th {
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #191919;
    padding: 15px;
    vertical-align: top;
    padding-left: 0;
    gap: 8px;
    border-bottom: 1px solid #000;
    font-size: 16px !important;
    background: transparent;
  }
  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not(
      [colspan]
    )::before {
    background-color: transparent;
  }

  &.expandableTableRow {
    .ant-table-row.ant-table-row-level-0 > td.ant-table-cell {
      padding: 8px 6px;
    }
    .ant-table-tbody > tr {
      background: transparent !important;
    }
  }

  &.expandedTableRow {
    .ant-table {
      min-height: 125px;
    }
    .ant-table,
    .ant-table-thead > tr,
    .ant-table-tbody > tr {
      background: #f8fafb;
    }
    .ant-table-expanded-row > td.ant-table-cell {
      padding: 8px 6px;
    }
    .ant-table-thead > tr > th {
      border-bottom: none;
    }
  }

  .ant-table-tbody > tr > td {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #000;
    mix-blend-mode: normal;
    padding: 17px 6px;
    border-bottom: none;
  }
  .ant-table-tbody > tr:nth-child(odd) {
    background: #f8fafb;
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
    font-weight: 400;
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
      background: #000;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: #000;
    }
  }
  .ant-table-cell-scrollbar {
    box-shadow: none;
  }
  .ant-table-body {
    overflow-y: auto !important;
  }
  .ant-table-thead th.ant-table-column-has-sorters {
    transition: none !important;
  }

  &.fixTD .ant-table-thead > tr > th {
    min-width: 150px;
    width: 150px;
  }
  &.fixTD .ant-table-tbody > tr > td {
    min-width: 150px;
    width: 150px;
  }

  &.fixTD .ant-table {
    width: 100%;
  }

  &.fixTD .ant-table-tbody > tr > td.ant-table-selection-column {
    text-align: left;
    padding-left: 16px;
    padding-right: 16px;
  }
  &.fixTD .ant-table-thead > tr > th.ant-table-selection-column {
    text-align: left;
    padding-left: 16px;
    padding-right: 16px;
  }
  ${(props: { isData: boolean }) => {
    return (
      props.isData &&
      `
    .ant-table-body{
      min-height:200px;
    }
     `
    );
  }}
`;
