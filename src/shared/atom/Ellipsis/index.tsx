import React from 'react';
import { EllipsisMainWrapper } from './style';

function Ellipsis(props: any) {
  const { children, width } = props;
  return (
    //@ts-ignore
    <EllipsisMainWrapper width={width}>{children}</EllipsisMainWrapper>
  );
}

export default Ellipsis;
