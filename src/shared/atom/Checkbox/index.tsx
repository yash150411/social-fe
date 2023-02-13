import React from 'react';
import { Flex } from '@atom/Flex';
import Error from '@atom/Error';
import { CheckboxContainer } from './style';

export interface CheckboxProps {
  name?: string;
  onChange?: any;
  defaultChecked?: any;
  checked?: any;
  disabled?: any;
  id?: string;
  error?: any;
  style?: any;
  value?: any;
  nameStyle?: any;
}
const Checkbox: React.FC<CheckboxProps> = ({
  error,
  id,
  name,
  onChange,
  checked,
  style,
  disabled,
  value,
  nameStyle
}) => {
  return (
    <Flex direction="column">
      <Flex>
        <CheckboxContainer
          checked={checked}
          value={value}
          name={id}
          id={id}
          onChange={onChange}
          style={style}
          disabled={disabled}
          data-testid={'checkbox'}
        />
        <span style={{ marginLeft: 8, ...nameStyle }}> {name}</span>
      </Flex>
      <span>{error ? <Error error={error} /> : ''}</span>
    </Flex>
  );
};

export default Checkbox;
