import styled from 'styled-components';

export const ImagePreviewerWrapper = styled.div`
  width: 178px;
  height: 118px;
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 5px;
`;

export const CloseIconImg = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

export const ImageName = styled.p`
  margin-top: 10px;
`;
