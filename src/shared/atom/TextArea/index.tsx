import React from 'react';
import { InputFormWrapper, TextAreaInputContainer } from './style';
import Error from '@atom/Error';
import { Form } from 'antd';

interface TextAreaProps {
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<any>, value: any) => void;
  onBlur?: (event: React.ChangeEvent<any>) => void;
  error?: any;
  dataTestid?: any;
  defaultValue?: any;
  refProps?: any;
  disabled?: boolean;
  autoComplete?: string;
  hasFeedback?: boolean;
  allowClear?: boolean;
  showCount?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
  row?: number;
}

export const TextAreaInput = (props: TextAreaProps): JSX.Element => {
  const {
    id,
    name,
    value,
    className,
    style,
    placeholder,
    dataTestid,
    defaultValue,
    onChange,
    error,
    refProps,
    disabled,
    autoComplete,
    onBlur,
    hasFeedback,
    allowClear,
    maxLength,
    showCount,
    row
  } = props;
  return (
    <InputFormWrapper className={className} error={error}>
      <Form.Item
        validateStatus={hasFeedback ? (error ? 'error' : 'success') : ''}
        hasFeedback={hasFeedback ? (!value ? false : true) : false}
      >
        <TextAreaInputContainer
          ref={refProps ? refProps : null}
          placeholder={placeholder}
          id={id}
          name={name}
          style={style}
          allowClear={allowClear}
          maxLength={maxLength}
          className={className}
          value={value}
          showCount={showCount}
          defaultValue={defaultValue}
          disabled={disabled}
          autoComplete={autoComplete}
          data-testid={dataTestid}
          //error={error}
          rows={row || 5}
          size="large"
          onChange={(e) => {
            if (onChange) {
              onChange(e, e.target.value);
            }
          }}
          onBlur={onBlur}
        />
      </Form.Item>
      <span className="errormsg">{error ? <Error error={error} /> : ''}</span>
    </InputFormWrapper>
  );
};
