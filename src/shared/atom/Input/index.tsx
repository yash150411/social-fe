import { Input as AntInput, Form } from 'antd';
import { FormInput, InputFormWrapper } from './style';

import { CURRENCY } from '@constants/index';
import Error from '@atom/Error';
import { Flex } from '@atom/Flex';
import React from 'react';

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
  onError?: (error: string) => void;
  isLoginView?: boolean;
  isCurrency?: boolean;
  styleForWrapper?: any;
}

export const Input = (props: InputFieldProps): JSX.Element => {
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
    max = 255,
    onError,
    isLoginView,
    isCurrency,
    styleForWrapper
  } = props;
  return (
    <InputFormWrapper className={isLoginView ? 'LoginView' : className} style={styleForWrapper}>
      <Form.Item
        validateStatus={hasFeedback ? (error ? 'error' : 'success') : ''}
        hasFeedback={hasFeedback ? (!value ? false : true) : false}>
        <FormInput
          ref={refProps ? refProps : null}
          placeholder={placeholder}
          type={type}
          id={id}
          name={name}
          maxLength={max}
          prefix={isCurrency ? CURRENCY : prefix}
          style={style}
          className={`${className} ${error ? 'errorClass' : ''}`}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          autoComplete={autoComplete}
          data-testid={dataTestid}
          onChange={(e) => {
            if (onChange) {
              const currentValue = e.target.value;
              if (max) {
                onError &&
                  onError(
                    currentValue && currentValue.length > max
                      ? `${name} Must be atmost ${max} characters`
                      : ''
                  );
              }
              onChange(e, currentValue);
            }
          }}
          onBlur={onBlur}
        />

        <span className="errormsg" style={{ display: 'flex' }}>
          <Flex flex={1}>{error ? <Error error={error} /> : ''}</Flex>
          {/* {!!max && (
            <Flex direction="row-reverse">
              <span style={{ color: 'gray' }}>{(value || '').length + '/' + max}</span>
            </Flex>
          )} */}
        </span>
      </Form.Item>
    </InputFormWrapper>
  );
};
