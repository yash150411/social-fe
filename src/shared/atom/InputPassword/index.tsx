import React from 'react';
import { PasswordFormInput, InputFormWrapper } from './style';
import { Input as AntInput, Form } from 'antd';
import Error from '@atom/Error';
import { Flex } from '@atom/Flex';

interface InputFieldProps {
  type?: string;
  id?: string;
  placeholder?: string;
  className?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<any>, value: any) => void;
  onBlur?: (event: React.ChangeEvent<any>) => void;
  components?: any;
  error?: any;
  addonBefore?: any;
  dataTestid?: any;
  max?: any;
  defaultValue?: any;
  prefix?: React.ReactNode;
  refProps?: any;
  disabled?: boolean;
  style?: any;
  autoComplete?: string;
  hasFeedback?: boolean;
  isLoginView?: boolean;
}

export const PasswordInput = (props: InputFieldProps): JSX.Element => {
  const {
    type,
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
    prefix,
    refProps,
    disabled,
    autoComplete,
    onBlur,
    hasFeedback,
    max,
    isLoginView
  } = props;
  return (
    <InputFormWrapper className={isLoginView ? 'LoginView' : className}>
      <Form.Item
        validateStatus={hasFeedback ? (error ? 'error' : 'success') : ''}
        hasFeedback={hasFeedback ? (!value ? false : true) : false}
      >
        <PasswordFormInput
          ref={refProps ? refProps : null}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          prefix={prefix}
          style={style}
          className={className}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          autoComplete={autoComplete}
          data-testid={dataTestid}
          onChange={(e) => {
            if (onChange) {
              const currentValue = e.target.value;
              if (max && currentValue && currentValue.length > max) {
                return;
              }
              onChange(e, currentValue);
            }
          }}
          onBlur={onBlur}
        />
        {!!max && (
          <Flex direction="row-reverse">
            <span style={{ color: 'gray' }}>{(value || '').length + '/' + max}</span>
          </Flex>
        )}

        <span className="errormsg">{error ? <Error error={error} /> : ''}</span>
      </Form.Item>
    </InputFormWrapper>
  );
};
