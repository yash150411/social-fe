import React, { CSSProperties, FC } from 'react';

import CloseCircle from '@assets/close-circle-white.svg';

import { ImagePreviewerWrapper, ProfileImage, CloseIconImg, ImageName } from './style';
import { CloseCircleFilled, CloseCircleOutlined } from '@ant-design/icons';

interface ThemeType {
  wrapper?: CSSProperties;
  image?: CSSProperties;
}
interface ImagePreviewerProps {
  image: string;
  name?: string;
  closable?: boolean;
  onClose?: (image:any) => void;
  theme?: ThemeType;
  onClick?: (logo: any) => void;
  alt?: string;
}

const ImagePreviewer: FC<ImagePreviewerProps> = ({
  image,
  name,
  alt = 'profile',
  closable = false,
  theme,
  onClose,
  onClick
}) => {
  return (
    <div>
      <ImagePreviewerWrapper style={theme?.wrapper}>
        <ProfileImage
          src={image}
          alt="profile"
          onClick={() => onClick && onClick(image)}
          style={theme?.image}
        />
        {closable && (
          <CloseCircleOutlined
            onClick={() =>  onClose && onClose(image)}
            style={{
              marginLeft: 10,
              color: '#fff',
              background: '#ff0000',
              fontSize: '20px',
              height: '20px',
              width: '20px',
              borderRadius: '50%'
            }}
          />
        )}
      </ImagePreviewerWrapper>
      {name && <ImageName>{name}</ImageName>}
    </div>
  );
};

export default ImagePreviewer;
