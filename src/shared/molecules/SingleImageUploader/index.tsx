import { Spin, Upload } from 'antd';

import uploadIcon from '@assets/imageUploaderIcon.svg';
import { Button } from '@atom/Buttons';
import { Flex } from '@atom/Flex';

import { Wrapper } from './style';
import Error from '@atom/Error';

const { Dragger } = Upload;

interface SingleImageUploaderProps {
  onChangeHandle?: any;
  onError?: () => void;
  loading?: boolean | string;
  disabled?: boolean;
  onBrowseClicked?: () => void;
  disableBrowse?: boolean;
  data?: any;
  error?: string;
}

function SingleImageUploader(props: SingleImageUploaderProps) {
  const {
    onChangeHandle,
    disableBrowse,
    onBrowseClicked,
    loading,
    disabled,
    data,
    onError,
    error
  } = props;

  const draggerprops = {
    onChange(info: any) {
      const isValidFile =
        info?.file?.type === 'image/png' ||
        info?.file?.type === 'image/jpg' ||
        info?.file?.type === 'image/jpeg';
      if (isValidFile) {
        const { status, percent } = info.file;
        const allDocsUploaded = document.getElementsByClassName('ant-upload-list-item');
        if (status === 'uploading' && percent == '100') {
          const file = info.file.originFileObj;
          if (onChangeHandle && file) {
            onChangeHandle(file, allDocsUploaded.length);
          }
        }
      } else {
        onError && onError();
      }
    },
    showUploadList: true
  };

  return (
    <Wrapper>
      <Dragger
        {...draggerprops}
        style={{ width: '100%' }}
        multiple={false}
        disabled={disabled}
        accept=".jpg, .jpeg, .png"
      >
        <Button
          text={data?.name}
          onClick={() => {
            onBrowseClicked && onBrowseClicked();
          }}
          style={{ width: '100%', borderRadius: 'unset', margin: 0 }}
        />
        <p className="ant-upload-drag-icon">
          <img
            src={data?.image_url || data?.image || uploadIcon}
            style={{
              filter: `grayscale(${disabled ? 1 : 0})`,
              width: data?.image ? '65%' : '20%',
              height: '150px',
              marginTop: '24px'
            }}
          />
        </p>
        <div className="contentDiv">
          <h5>
            Drag Files or{' '}
            <span
              style={{ cursor: !disableBrowse ? 'pointer' : 'no-drop' }}
              onClick={() => {
                onBrowseClicked && onBrowseClicked();
              }}
            >
              Browse
            </span>{' '}
            to upload
          </h5>
          <span className="errormsg" style={{ color: 'red' }}>
            {error ? <Error error={error} /> : ''}
          </span>
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
}

export default SingleImageUploader;
