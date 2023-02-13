import styled from 'styled-components';

export const UploadFileWrapper = styled.label`
  border: 1px solid black;
  display: inline-block;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;

  input[type='file'] {
    display: none;
  }
`;
