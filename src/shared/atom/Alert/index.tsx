import React, { FC } from 'react';
import { Alert, Collapse } from 'antd';

interface AlertProps {
  message?: string;
  type?: 'success' | 'info' | 'warning' | 'error' | undefined;
}
export const AlertComponent: FC<AlertProps> = ({ message, type }) => {
  return <Alert message={message} type={type} showIcon={true} closable={true} />;
};

export default AlertComponent;
