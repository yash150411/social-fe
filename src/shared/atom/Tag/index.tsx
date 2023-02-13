import { CloseOutlined } from '@ant-design/icons';
import { Flex } from '@atom/Flex';
import { Tag } from 'antd';
import React from 'react';
import { Wrapper } from './style';

interface TagFieldProps {
  text?: React.ReactNode;
  icon?: any;
  color?: 'success' | 'processing' | 'error' | 'warning' | 'default';
  closable?: boolean;
  rounded?: boolean;
  onClose?: (e: any) => void;
  onClick?: (e: any) => void;
  style?: any;
  prefix?: any;
}

export const TagComponent = (props: TagFieldProps): JSX.Element => {
  const { text, color, icon, closable, rounded, onClick, onClose, style = {}, prefix = '' } = props;
  return (
    <Wrapper>
      <Tag icon={icon} color={color} style={{ borderRadius: rounded ? '8px' : '0px', ...style }}>
        {prefix}
        <Flex gap={5} className={'tab-content'}>
          {text}
          {closable && (
            <div onClick={onClose}>
              <CloseOutlined color="#a19b9b" style={{ cursor: 'pointer' }} />
            </div>
          )}
        </Flex>
      </Tag>
    </Wrapper>
  );
};
