import styled from 'styled-components';

export const EllipsisMainWrapper = styled.span`
  width: ${(props: any) => props.width || 100}px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
