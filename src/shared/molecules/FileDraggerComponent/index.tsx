import { CustomWrapper, Wrapper } from './style';
import { Form, Spin, Upload } from 'antd';
import { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/lib/upload';

import FileUplaod from '@assets/fileUpload.svg';
import FilesImage from '@assets/document.svg';
import { Flex } from '@atom/Flex';
import { InboxOutlined } from '@ant-design/icons';
import React from 'react';
import { showErrorToast } from '@utils/index';

const { Dragger } = Upload;
interface ImageseListProps {
  onChangeHandle?: any;
  loading?: boolean | string;
  maxLimit?: any;
  format?: string;
  multiple?: boolean;
  disabled?: boolean;
  showConfirmationModal?: boolean;
  onBrowseClicked?: () => void;
  disableBrowse?: boolean;
  uploadedFileName?: string;
  accept?: any;
  showUploadList?: boolean;
}

interface IDocumentUploadProps {
  onChangeHandle?: any;
  loading?: boolean | string;
  maxLimit?: any;
  format?: string;
  multiple?: boolean;
  disabled?: boolean;
  showConfirmationModal?: boolean;
  onBrowseClicked?: () => void;
  disableBrowse?: boolean;
  documentList?: any;
  onFileRemove?: any;
  showRemoveIcon?: boolean;
  showUploadList?: boolean;
}

export const CustomFileDragger = (props: IDocumentUploadProps): JSX.Element => {
  const {
    onChangeHandle,
    documentList,
    onFileRemove,
    showRemoveIcon = true,
    loading,
    maxLimit = null,
    format,
    multiple,
    disabled,
    showConfirmationModal,
    showUploadList = true
  } = props;

  const [form] = Form.useForm();

  const disallowedFileTypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv'
  ];

  const allowedFileTypes = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png', 'mp4'];

  const draggerprops: UploadProps = {
    name: 'file',
    multiple: multiple,
    fileList: documentList,
    style: { width: '100%' },
    accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4',
    itemRender: (originNode, file) => {
      const { type, size, name } = file;
      if (!!size && !!maxLimit && size > maxLimit) {
        return null;
      } else if (
        !!name &&
        allowedFileTypes.includes(name.substring(name.lastIndexOf('.') + 1, name.length))
      ) {
        return originNode;
      } else {
        return null;
      }
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      strokeWidth: 3,
      format: (percent: number | undefined) => percent && `${parseFloat(percent.toFixed(2))}%`
    },
    onChange(info: UploadChangeParam<UploadFile<any>>) {
      const { status, percent } = info.file;
      let addFiles = true;
      const allDocsUploaded = document.getElementsByClassName('ant-upload-list-item');
      if (!types.includes(String(info?.file?.type))) {
        addFiles = false;
      }
      if (status === 'uploading' && percent === 100) {
        const file = info.file.originFileObj;
        if (addFiles && onChangeHandle && file) {
          onChangeHandle(file, allDocsUploaded.length, info?.file?.uid);
        }
      }
    },
    showUploadList: showUploadList
      ? {
          showRemoveIcon: true
        }
      : false,
    onRemove: (file: UploadFile<any>) => {
      onFileRemove(file);
    }
  };

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const types = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'video/mp4',
    'image/jpg',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];

  return (
    <CustomWrapper>
      <Form form={form} initialValues={{ fileList: documentList }}>
        <Form.Item name="fileList" valuePropName="fileList" getValueFromEvent={normFile}>
          <Dragger
            {...draggerprops}
            beforeUpload={(file) => {
              if (!!maxLimit && file.size > maxLimit) {
                showErrorToast({
                  message: 'Failed!',
                  description: `File size should be less than ${(maxLimit / 1000000).toFixed(2)} MB`
                });
                return false;
              } else if (!types.includes(file.type)) {
                showErrorToast({
                  message: 'Failed!',
                  description: 'Please select only pdf, png, jpg, jpeg, mp4 & docx types of files.'
                });
                return false;
              } else {
                return true;
              }
            }}
          >
            <p className="ant-upload-drag-icon">
              <img src={FilesImage} width={'42px'} />
            </p>
            {/* <p className="ant-upload-text">Click or drag file to this area to upload</p> */}
            <p className="ant-upload-hint">
              Drag and drop files or <span style={{ color: '#3080ed' }}>Click here</span> to select
              from your computer
            </p>
            {loading && (
              <Flex
                direction="row"
                justifyContent={'center'}
                alignItems={'center'}
                top={10}
                bottom={10}
              >
                <Spin />
              </Flex>
            )}
          </Dragger>
        </Form.Item>
      </Form>
    </CustomWrapper>
  );
};

export const FileDraggerComponent = (props: ImageseListProps): JSX.Element => {
  const {
    onChangeHandle,
    disableBrowse,
    onBrowseClicked,
    loading,
    maxLimit,
    format,
    multiple,
    disabled,
    showConfirmationModal,
    accept,
    uploadedFileName,
    showUploadList
  } = props;
  const draggerprops = {
    onChange(info: any) {
      const { status, percent } = info.file;
      const allDocsUploaded = document.getElementsByClassName('ant-upload-list-item');
      if (status === 'uploading' && percent == '100') {
        const file = info.file.originFileObj;
        if (onChangeHandle && file) {
          onChangeHandle(file, allDocsUploaded.length);
        }
      }
    },
    showUploadList: showUploadList === false ? false : true
  };

  return (
    //@ts-ignore
    <Wrapper>
      <Dragger
        {...draggerprops}
        style={{ width: '100%' }}
        multiple={multiple}
        disabled={disabled}
        accept={accept}
      >
        <div className="topstrip"></div>
        <div className="upload-content">
          {!uploadedFileName && (
            <p className="ant-upload-drag-icon">
              <img src={FileUplaod} style={{ filter: `grayscale(${disabled ? 1 : 0})` }} />
            </p>
          )}
          <div className="contentDiv">
            {uploadedFileName || (
              <h5>
                Drag and Drop Or <br />
                <span
                  style={{ cursor: !disableBrowse ? 'pointer' : 'no-drop' }}
                  onClick={() => {
                    onBrowseClicked && onBrowseClicked();
                  }}
                >
                  Browse{' '}
                </span>
                to upload
              </h5>
            )}

            <p>
              {/* {`Maximum file size is ${maxLimit ? maxLimit : '5.00'}MB.`} <br /> */}
              {/* {`Accepted formats include ${format ? format : '.jpg, .jpeg, .png'}`} */}
            </p>
          </div>
        </div>
        {loading && (
          <Flex
            direction="row"
            justifyContent={'center'}
            alignItems={'center'}
            top={10}
            bottom={10}
          >
            <Spin />
          </Flex>
        )}
      </Dragger>
    </Wrapper>
  );
};
export default FileDraggerComponent;
