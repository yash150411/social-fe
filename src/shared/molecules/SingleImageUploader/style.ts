import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  width: 100%;
  .ant-upload-list {
    height: 0px;
    display: none;
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
    border: 1px solid var(--color-system-gray-gray-5);
    margin-bottom: var(--spacing-2);
    background: transparent;
  }
  .contentDiv h5 {
    font-size: 14px;
    line-height: 22px;
    color: var(--color-system-gray-gray-7);
  }
  .contentDiv h5 span {
    color: #2f80ed;
  }
  .contentDiv p {
    font-size: 12px;
    line-height: 18px;
    color: var(--color-system-gray-gray-7);
  }

  .contentDiv .errorDiv p {
    color: var(--color-system-red-red-6);
  }
  .ant-upload-drag-icon {
    width: 100%;
  }
  .ant-upload.ant-upload-drag .ant-upload {
    padding-top: 0px;
  }
`;
