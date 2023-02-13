import styled from 'styled-components';
import { Field } from 'formik';
import Atachment from '@assets/attachment.svg';
import '@constant/color/Color.css';

export const InputFormdiv = styled.div`
 margin-bottom:18px;
}
.errormsg{
  color:red;
    display: block;
    margin-top:1px;
}

`;
export const InputFormWrapper = styled.div<{ error: any }>`
  border: ${(props: any) =>
    props.error
      ? '1px dashed var(--color-system-red-red-5) !important'
      : '1px dashed var(--color-system-gray-gray-19) !important'};
  padding: 8px 10px;
  border-radius: 8px;
  display: block;
  align-items: center;
  position: relative;
  height: 46px;
  input {
    opacity: 0;
    width: 100%;
    z-index: 4;
    position: relative;
    disable: true;
  }
  input[type='file']::-webkit-file-upload-button {
    visibility: hidden;
    //  display:none;
  }
  &::after {
    content: url(${Atachment});
    position: absolute;
    right: 10px;
    top: 7px;
  }
  .file-placeholder {
    position: absolute;
    left: 12px;
    color: var(--color-system-gray-gray-18);
    margin-top: 2px;
  }
`;
export const InputForm = styled(Field)`
   
}
`;
