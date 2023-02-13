import styled from 'styled-components';

export const Notewrapper = styled.div`
  width: 100%;
  max-width: 100%;
  .ant-alert-with-description .ant-alert-icon {
    font-size: 14px;
    color: #fff;
    margin-right: 9px;
    margin-top: 3px;
    background: rgba(26, 144, 255, 1);
    border-radius: 100px;
  }
  .ant-alert-with-description {
    padding: 14px 14px 17px 17px;
  }
  .ant-alert-with-description .ant-alert-message {
    color: red;
    font-size: 14px;
    display: contents;
  }
  .ant-alert-description {
    font-size: 14px;
    line-height: 22px;
    color: #18102d;
    display: contents;
  }
  .ant-alert-info {
    background-color: #e6f7ff;
    border: 1px solid #8fd4ff;
    border-radius: 8px;
    margin-bottom: 16px;
  }
`;
