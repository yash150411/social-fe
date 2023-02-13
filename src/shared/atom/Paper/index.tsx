import React from 'react';
import { PaperContainer } from './style';
interface PaperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
function Paper(props: PaperProps) {
  const { children, style } = props;
  return <PaperContainer style={style}>{children}</PaperContainer>;
}

export default Paper;
