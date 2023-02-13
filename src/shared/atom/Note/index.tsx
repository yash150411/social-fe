import { Alert } from 'antd';
import React from 'react';
import { Notewrapper } from './style';

interface NoteProps {
  id?: string;
  description?: React.ReactNode;
  className?: string;
  message?: string;
  type?: 'success' | 'info' | 'warning' | 'error';
  noteIcon?: typeof Image;
}

export const Note = (props: NoteProps): JSX.Element => {
  const { description, type = 'info', id } = props;
  const { message } = props;
  return (
    <Notewrapper id={id}>
      <Alert message={message} description={description} type={type} showIcon={true} />
    </Notewrapper>
  );
};
