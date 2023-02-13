import { Modal } from 'antd';
import styled from 'styled-components';

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
  width: 100%;
`;

export const FilePreviewList = styled.div`
  border: 1px solid #c4c4c4;
  display: flex;
  padding: 16px 18px;
  border-radius: 9px;
  font-size: 16px;
  color: #232323;
  margin-bottom: 16px;
  width: 100%;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  .ant-modal-body {
    max-height: 70vh;
  }
`;

export const ModalWrapper = styled(Modal)`
  top: 30px;
  .ant-modal-body {
    max-height: 83vh;
    overflow: auto;
  }
  .ant-modal-footer {
    display: none;
  }
  .ant-modal-close-x {
    color: #000;
  }
  .ant-modal-header {
    border-bottom: none;
  }
`;
