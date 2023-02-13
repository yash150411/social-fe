import React from 'react';
import Error from '@atom/Error';
import { Flex } from '@atom/Flex';
import { Input, Select } from 'antd';
import { CustomSelect, InputFormWrapper } from './style';
interface InputFieldProps {
  selectId?: string;
  selectOnChange?: any;
  selectValue?: any;
  children?: any;
  type?: string;
  InputId?: string;
  placeholder?: string;
  className?: string;
  InputValue?: string;
  InputOnChange?: any;
  InputName: string;
  components?: any;
  error?: any;
  addonBefore?: any;
  InputDefaultValue?: any;
  disabled?: boolean;
  onBlur?: any;
}
const { Option } = Select;
export const InputGroup = (props: InputFieldProps): JSX.Element => {
  const {
    selectId,
    selectOnChange,
    selectValue,
    type,
    InputId,
    InputName,
    InputValue,
    InputOnChange,
    className,
    placeholder,
    InputDefaultValue,
    error,
    children,
    disabled,
    onBlur
  } = props;
  return (
    <InputFormWrapper className={className}>
      <Input.Group compact>
        <CustomSelect
          id={selectId}
          optionFilterProp="children"
          onChange={selectOnChange}
          value={selectValue}
          style={{ width: '35%' }}
        >
          {children}
        </CustomSelect>
        <Input
          placeholder={placeholder}
          type={type}
          id={InputId}
          name={InputName}
          onChange={InputOnChange}
          className={`${className} ${error ? 'errorClass' : ''}`}
          value={InputValue}
          defaultValue={InputDefaultValue}
          disabled={disabled}
          onBlur={onBlur}
          style={{ width: '65%' }}
        />
      </Input.Group>
      <span className="errormsg" style={{ display: 'flex' }}>
        <Flex flex={1}>{error ? <Error error={error} /> : ''}</Flex>
      </span>
    </InputFormWrapper>
  );
};
