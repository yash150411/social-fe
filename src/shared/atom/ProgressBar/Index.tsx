import React from 'react';
import { Progress } from 'antd';
import { ProgressBarWrapper } from './style';

interface ProgressProps {
  id?: string;
  className?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<any>, value: any) => void;
  onBlur?: (event: React.ChangeEvent<any>) => void;
  error?: any;
  dataTestid?: any;
  defaultValue?: any;
  refProps?: any;
  disabled?: boolean;
  autoComplete?: string;
  allowClear?: boolean;
  showCount?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
}
export const ProgressBar = (props: ProgressProps): JSX.Element => {
  return (
    <>
      <ProgressBarWrapper>
        <Progress percent={25} />
      </ProgressBarWrapper>
    </>
  );
};
