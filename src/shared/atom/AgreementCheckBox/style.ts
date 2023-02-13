import { ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { CONTAINER_HEGHT } from './helper';
export const PDFContainer = styled.iframe`
  height: 400px;
  overflow: scroll;
`;

export const ZoomIn = styled(ZoomInOutlined)`
  font-size: 21px;
  cursor: pointer;
`;
export const ZoomOut = styled(ZoomOutOutlined)`
  font-size: 21px;
  cursor: pointer;
  margin-left: 30px;
`;

export const PDFFrame = styled.div`
  height: ${CONTAINER_HEGHT}px;
  overflow-x: auto;
  border: 1px solid #9792e3;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(226, 226, 238, 1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(151, 146, 227, 1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(151, 146, 227, 1);
  }
`;
