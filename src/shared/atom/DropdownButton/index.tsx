import { Button, Dropdown, Menu, Space } from 'antd';
import React from 'react';

import { DownOutlined } from '@ant-design/icons';
import { CustomMenu, DropdownButtonContainer, DropdownContainer } from './style';

interface DropdownButtonProps {
  text: string;
  options: Array<{
    label: string;
    key: any;
  }>;
  onSelect: (item: any) => void;
}

function DropdownButton(props: DropdownButtonProps) {
  const { text, options, onSelect } = props;

  const menu = (
    <CustomMenu
      onClick={(item: any) => {
        onSelect(item);
      }}
      items={options}
    />
  );

  return (
    <DropdownContainer overlay={menu} trigger={['click']}>
      <DropdownButtonContainer>
        <Space>
          {text}
          <DownOutlined style={{ fontSize: 13, fontWeight: 900 }} />
        </Space>
      </DropdownButtonContainer>
    </DropdownContainer>
  );
}

export default DropdownButton;
