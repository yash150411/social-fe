import React, { ChangeEvent, FC, MouseEvent, MouseEventHandler } from 'react';
import { UploadFileWrapper } from './styles';

interface FileUploadButtonProps {
  text: string;
  multiple?: boolean;
  isDisable?: boolean;
  onUpload?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUploadButton: FC<FileUploadButtonProps> = ({
  text,
  multiple = false,
  onUpload,
  isDisable
}) => {
  return (
    <UploadFileWrapper>
      <input
        type="file"
        accept="image/*"
        onChange={onUpload}
        multiple={multiple}
        disabled={isDisable}
      />
      {text}
    </UploadFileWrapper>
  );
};

export default FileUploadButton;
