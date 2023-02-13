import React from 'react';
import { SquareWrapper, DefaultWrapper } from './style';
import { Radio } from 'antd';

export interface RadioProps {
  onChange?: (e: any) => void;
  name?: string;
  id?: string;
  defaultValue?: any;
  children: any;
  disabled?: boolean;
  type?: string;
  value?: any;
}

function RadioButton(props: RadioProps) {
  const { onChange, id, name, defaultValue, children, disabled, type, value } = props;
  const Wrapper = type === 'square' ? SquareWrapper : DefaultWrapper;
  return (
    <Wrapper>
      <Radio.Group
        className="redio-section"
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        name={name}
        id={id}
        disabled={disabled}
      >
        {children}
      </Radio.Group>
    </Wrapper>
  );
}
export default RadioButton;
