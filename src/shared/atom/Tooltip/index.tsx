import React from 'react';
import { Tooltip, Button } from 'antd';
import QuestionMark from '@assets/question-mark.svg';
import { TooltipWrapper } from './style';

interface TooltipFieldProps {
  text?: React.ReactNode;
  placement?: any;
  icon?: any;
}

export const TooltipText = (props: TooltipFieldProps): JSX.Element => {
  const { text, placement, icon } = props;
  return (
    <TooltipWrapper title={''}>
      <Tooltip placement={placement} overlay={text} title={''}>
        <img
          src={icon ? icon : QuestionMark}
          alt="Tooltip Icon"
          style={{ maxWidth: 'max-content' }}
        />
      </Tooltip>
    </TooltipWrapper>
  );
};
