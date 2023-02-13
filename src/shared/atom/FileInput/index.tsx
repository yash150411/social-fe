import React from 'react';
import { InputForm, InputFormWrapper, InputFormdiv } from './style';
import Error from '@atom/Error';

interface FileInputProps {
  type?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<any>, value: any) => void;
  onBlur?: (event: React.ChangeEvent<any>, value: any) => void;
  components?: any;
  error?: any;
  addonBefore?: any;
  dataTestid?: any;
  max?: any;
  imgname?: any;
  imgURL?: string;
  label?: string;
}

export const FileInput = (props: FileInputProps): JSX.Element => {
  const {
    type,
    id,
    name,
    value,
    className,
    placeholder,
    error,
    dataTestid,
    onChange,
    imgname,
    imgURL,
    label
  } = props;
  return (
    <InputFormdiv title={''}>
      <InputFormWrapper error={error}>
        <InputForm
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          className={className}
          data-testid={dataTestid}
          onChange={onChange}
          value={value}
        />

        <label className="file-placeholder">Drag and drop or browse</label>
      </InputFormWrapper>
      <span className="errormsg">{error ? <Error error={error} /> : ' '}</span>
      {!!imgname && !error && (
        <label style={{ marginRight: 10, wordBreak: 'break-all' }} className="file-placeholder">
          {imgname}
        </label>
      )}
      {!!imgURL && !error && typeof imgURL === 'string' && label && (
        <a href={imgURL} target={'_blank'}>
          {label}
        </a>
      )}
    </InputFormdiv>
  );
};
