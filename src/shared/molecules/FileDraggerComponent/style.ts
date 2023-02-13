import styled from 'styled-components';
import { H1 } from '@constant/typography/Typography';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 24px;
  .topstrip {
    background: #c4c4c4;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    text-align: center;
    text-align: center;
    border-radius: 3px;
    height: 44px;
    width: 100%;
    margin-bottom: 16px !important;
  }
  .ant-upload-list {
  }
  .imageUploader {
    display: flex;
    gap: 8px;
  }
  .imageThumbnail {
    display: flex;
    flex: 1;
  }
  .imageThumbnail img {
    width: 100%;
  }
  .ant-upload.ant-upload-drag {
    border: none;
    height: auto !important;
  }
  .ant-upload.ant-upload-drag p.ant-upload-drag-icon {
    margin-bottom: 15px !important;
  }
  .contentDiv h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #818080;
  }
  .contentDiv h5 span {
    color: #3490dc;
  }
  .contentDiv p {
    font-size: 12px;
    line-height: 18px;
    color: #818080;
  }

  .contentDiv .errorDiv p {
    color: #818080;
  }

  .ant-upload.ant-upload-drag .ant-upload {
    padding: 0px 0 !important;
  }
  .upload-content {
    padding: 24px 24px 48px 24px !important;
  }
  .ant-upload-list-text {
    display: none
  }
`;

export const CustomWrapper = styled.div`
  .ant-upload-list-item-error,
  .ant-upload-list-item-error .ant-upload-text-icon > .anticon,
  .ant-upload-list-item-error .ant-upload-list-item-name,
  .ant-upload-list-item-error .ant-upload-list-item-card-actions .anticon {
    color: rgba(0, 0, 0, 0.85) !important;
  }
  .ant-tooltip {
    display: none;
  }
  .ant-upload-list-item-name {
    color: rgba(0, 0, 0, 0.85) !important;
  }
  .ant-upload-list-item-card-actions-btn.ant-btn-sm {
    opacity: 1;
  }
  .ant-upload-list-item-card-actions .anticon {
    color: rgba(0, 0, 0, 0.85) !important;
  }
  .ant-upload-list-item-info .anticon-loading .anticon,
  .ant-upload-list-item-info .ant-upload-text-icon .anticon {
    color: rgba(0, 0, 0, 0.85) !important;
  }
  .ant-upload.ant-upload-drag {
    background: transparent;
    border: 1px dashed #d9d9d9;
    border-radius: 10px;
    padding: 40px 0px;
    height: auto !important;
  }
`;
