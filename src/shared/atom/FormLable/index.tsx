import React from 'react';
import styled from 'styled-components';
import { JsxElement, JsxFragment } from 'typescript';

export const LabelText = styled.label<{ color?: string }>`
  font-size: 15px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  text-align: left;
  color: ${({ color = '#191919' }) => color};
  display: block;
  margin-bottom: 16px;
`;

interface FormLabelProps {
  text: string | React.ReactNode;
  isMandatory?: boolean;
  className?: string;
  textColor?: string;
  style?: any;
}

export const Label = (props: FormLabelProps): JSX.Element => {
  const { text, isMandatory, className, textColor, style } = props;
  return (
    <LabelText className={className} color={textColor} style={style}>
      {text}
      {isMandatory ? <span style={{ color: 'red', marginLeft: '4px' }}>*</span> : null}
    </LabelText>
  );
};
