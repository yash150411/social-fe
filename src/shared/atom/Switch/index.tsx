import { Switch as SwitchComponent } from 'antd';
import { SwitchChangeEventHandler } from 'antd/lib/switch';
import React from 'react';

import { Container } from './styles';
interface SwitchProps {
  id?: string;
  checked?: boolean;
  onChange?: SwitchChangeEventHandler;
  defaultChecked?: boolean;
}
function Switch(props: SwitchProps) {
  const { checked, onChange, id, defaultChecked } = props;
  return (
    <Container>
      <SwitchComponent
        onChange={onChange}
        checked={checked}
        id={id}
        defaultChecked={defaultChecked}
      />
    </Container>
  );
}

export default Switch;
