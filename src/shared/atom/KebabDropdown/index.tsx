import { Dropdown, Menu } from 'antd';
import React from 'react';

import { ThreeDots } from '@assets/index';
import { Flex } from '@atom/Flex';

interface KebabDropdownProps {
  children: React.ReactNode;
  className?: string;
  isBordered?: boolean;
}

function KebabDropdown(props: KebabDropdownProps) {
  const { children, className, isBordered } = props;
  const menu = (children: React.ReactNode) => (
    <Menu className={className} style={{ borderRadius: '8px' }}>
      {children}
    </Menu>
  );
  return (
    <Flex style={{ cursor: 'pointer' }}>
      <Dropdown overlay={menu(children)} trigger={['click']}>
        <img
          src={ThreeDots}
          alt={ThreeDots}
          onClick={(e) => e.preventDefault()}
          style={
            isBordered
              ? {
                  backgroundColor: 'white',
                  padding: '10px',
                  borderRadius: '6px',
                  border: '1px solid rgb(123, 87, 176)'
                }
              : {}
          }
        />
      </Dropdown>
    </Flex>
  );
}

export default KebabDropdown;
