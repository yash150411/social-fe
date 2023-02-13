import styled from 'styled-components';
import '@constant/color/Color.css';

export const SuggestionsWrapper = styled.div`
  margin-bottom: 18px;
  width: 100%;
  .errormsg {
    color: red;
  }
  &.bottom-0 {
    margin-bottom: 0px;
  }
  .ant-input[disabled] {
    opacity: 0.8;
  }
`;

export const Dropdown = styled.div`
  position: relative;
`;
export const Ul = styled.ul`
  list-style: none;
  padding: 20px 25px;
  margin: 0;
  background: var(--color-system-gray-gray-20);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  top: 50px;
  z-index: 6;
  left: 0;
  right: 0;
  min-width: 210px;
  max-height: 220px;
  overflow: auto;
`;

export const Li = styled.li`
  list-style: none;
  margin-bottom: 15px;
  cursor: pointer;
  position: relative;
  padding-left: 20px;
  :last-child {
    margin-bottom: 0;
  }
  img {
    margin-right: 10px;
    position: absolute;
    left: 0;
    top: 6px;
  }
`;
export const Img = styled.img``;
export const DropdownInput = styled.div``;
