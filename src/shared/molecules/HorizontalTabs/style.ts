import styled from 'styled-components';
import { Tabs } from 'antd';

export const TabContentWrapper = styled.div``;
export const CustomTab = styled(Tabs)`
  .ant-tabs-content {
  }
  .ant-tabs-nav-wrap {
    border-bottom: none;
  }
  .ant-tabs-tab {
    border: none !important;
    border-top-left-radius: 0.35rem;
    font-style: normal;
    font-weight: 400;
    font-size: 15px !important;
    line-height: 21px;
    font-weight: 600;
    text-align: center;
    background: none !important;
    // text-transform: uppercase;
    color: #b5b5b5;
    padding: 12px 40px !important;
    transition: none !important;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    background: 0 0 !important;
    border: none !important;
    border-bottom: 2px solid rgba(228, 168, 83, 0.5) !important;
    font-weight: 600 !important;
    color: #191919 !important;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #191919 !important;
  }
  .ant-tabs-nav .ant-tabs-nav-wrap::before,
  .ant-tabs-nav .ant-tabs-nav-wrap::after {
    box-shadow: none !important;
  }
`;
