import styled from 'styled-components';
import '@constant/color/Color.css';

export const BreadCrumbsContainer = styled.div`
  .ant-dropdown-trigger > .anticon.anticon-down,
  .ant-dropdown-link > .anticon.anticon-down,
  .ant-dropdown-button > .anticon.anticon-down {
    font-size: 10px;
    vertical-align: baseline;
    display: none;
  }

  .ant-breadcrumb a:hover {
    color: var(--color-system-purple-purple-6);
  }
  .ant-breadcrumb a {
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    text-align: left;
    color: var(--color-system-gray-gray-7);
  }
  .ant-breadcrumb-link > .anticon + span {
    margin-left: var(--spacing-2);
  }
`;
