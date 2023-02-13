import { Col, Row, Upload } from 'antd';
import { CustomWrapper, FilePreviewList, ModalWrapper, Wrapper } from './style';

import DownloadImage from '@assets/downloadImage.png';
import FilesImage from '@assets/filesImage.png';
import PadlockImage from '@assets/padlock.png';
import { Flex } from '@atom/Flex';
import React from 'react';
import { UploadProps } from 'antd/lib/upload';

interface IFilePreviewProps {
  document?: any;
}

const FilePreview: React.FC<IFilePreviewProps> = ({ document }) => {
  const [showModal, setShowModal] = React.useState(false);

  const isImage =
    document?.name?.includes('.jpg') ||
    document?.name?.includes('.png') ||
    document?.name?.includes('.jpeg');

  const isVideo = document?.name?.includes('.mp4');

  const draggerprops: UploadProps = {
    name: 'file',
    multiple: false,
    fileList: new Array(1).fill(document), // document list,
    style: { width: '100%' },
    showUploadList: {
      showRemoveIcon: false,
      showDownloadIcon: true,
      showPreviewIcon: true
    },
    itemRender: (originNode, file, fileList) => {
      // custom item render
      return (
        <Wrapper>
          <FilePreviewList onClick={() => setShowModal(!showModal)}>
            <Row style={{ width: '100%', alignItems: 'center' }}>
              <Col span={20}>
                <Flex gap={16}>
                  <span>
                    <img src={FilesImage} alt="file" />
                  </span>
                  <span>{file?.name}</span>
                  {!!document?.is_private && (
                    <span>
                      <img src={PadlockImage} alt="private" />
                    </span>
                  )}
                </Flex>
              </Col>
              <Col span={4}>
                <Flex justifyContent={'end'}>
                  <img src={DownloadImage} />
                </Flex>
              </Col>
            </Row>
          </FilePreviewList>

          <ModalWrapper
            visible={showModal}
            onCancel={() => setShowModal(false)}
            title={
              <div
                onClick={() => {
                  window.open(file?.url, '_blank');
                }}
              >
                <img src={DownloadImage} style={{ marginRight: '5px' }} /> Download
              </div>
            }
            width={'80%'}
          >
            {isImage ? (
              <img
                src={file?.url}
                alt="media"
                style={{ height: '100vh', width: '100%', objectFit: 'contain' }}
              />
            ) : (
              <div>
                <iframe
                  src={
                    isVideo
                      ? `${file?.url}`
                      : `https://docs.google.com/gview?url=${file?.url}&embedded=true`
                  }
                  allowFullScreen={true}
                  style={{ height: '100vh', width: '100%' }}
                />
              </div>
            )}
          </ModalWrapper>
        </Wrapper>
      );
    }
  };

  return (
    <CustomWrapper>
      <Upload {...draggerprops} />
    </CustomWrapper>
  );
};

export default FilePreview;
