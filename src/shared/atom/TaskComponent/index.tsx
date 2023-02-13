import Checkbox from '@atom/Checkbox';
import { Flex } from '@atom/Flex';
import React from 'react';

interface TaskComponentProps {
  name?: string;
  onChange?: any;
  defaultChecked?: any;
  checked?: any;
  disabled?: any;
  id?: string;
  error?: any;
  style?: any;
  value?: any;
}

const TaskComponent: React.FC<TaskComponentProps> = ({
  error,
  id,
  name,
  onChange,
  checked,
  style,
  disabled,
  value
}) => {
  return (
    <Flex style={{ border: '1px solid #c4c4c4', padding: '13px', borderRadius: '9px' }}>
      <Checkbox
        nameStyle={{
          textDecoration: !!checked ? 'line-through' : 'none',
          color: !!checked ? '#cdcdcd' : '#000'
        }}
        style={style}
        id={id}
        name={name}
        checked={value}
        onChange={onChange}
        value={value}
        disabled={disabled}
        error={error}
      />
    </Flex>
  );
};

export default TaskComponent;
