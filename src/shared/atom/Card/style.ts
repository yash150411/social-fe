import styled from 'styled-components';
import { Card } from 'antd';

export const CustomCard = styled(Card)`
  padding: 16px 16px 20px 16px;
  width: 100%;
  max-width: 100%;
  border-radius: 16px;
  .ant-card-head-title {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .ant-card-head {
    border-bottom: none;
    padding-left: 0px;
  }
  .ant-card-body {
    padding: 0px;
  }
`;
