import React from 'react';
import styled from 'styled-components';

interface FormDataProps {
  status: string | number;
  isUppercase?: boolean;
}

interface Props {
  color?: string;
}
export const Value = styled.span<Props>`
  color: ${(props) => props.color};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  //margin-bottom: 5px;
  //margin-top: 10px;
  margin-right: 2px;
  word-break: break-word;
  display: block;
`;

export const EmptyValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  display: block;
  font-family: Lato, sans-serif;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0px;
`;

const StatusLabel: React.FC<FormDataProps> = ({ status, isUppercase = false }) => {
  switch (status) {
    case 0:
      return <Value color="red">{isUppercase ? 'INACTIVE' : 'Inactive'}</Value>;
    case 1:
      return <Value color="#27a03b">{isUppercase ? 'ACTIVE' : 'Active'}</Value>;
    case 2:
      return <Value color="#ff8a00">{isUppercase ? 'DRAFTS' : 'Draft'}</Value>;
    default:
      return <EmptyValue>Not Specified</EmptyValue>;
  }
};
export default StatusLabel;
