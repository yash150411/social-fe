import styled from 'styled-components';
import { Input } from 'antd';
import { SearchIcon } from '@assets/index';
import '@constant/color/Color.css';

export const FormInput = styled(Input)`
  font-size: 16px;
  color: #000;
  font-weight: 400;
  line-height: 22px;
  text-align: left;
  padding: 0px 0px 0px 10px;
  border: none;
  &:hover {
    border: none !important;
    outline: none;
    box-shadow: none;
  }
  &:focus {
    border: none !important;
    outline: none;
    box-shadow: none;
  }
`;
export const SearchbarWrapper = styled.div`
margin-bottom:24px;
    line-height: 22px;
    padding: 6px 12px;
    height: 48px;
    background: transparent;
    border-radius: 4px;
    border: 1px solid #cdcdcd;
    align-items: center;
    flex-direction: row-reverse;
    display: flex;
    &::after {
      padding-top: 5px !important;
    }
    &:hover {
      border: 1px solid #cdcdcd !important;
      outline: none;
      box-shadow: none;
    }
    &:focus {
      border: 1px solid #cdcdcd !important;
      outline: none;
      box-shadow: none;
    }
    &.ViewBranchDetailSearch{
    padding: 2px 12px;
    border: 1px solid var(--color-system-gray-gray-16);
    border-radius: 8px;
    width: 320px;
    }
    
&::after{
  content:url(${SearchIcon}) }};
}

@media(max-width:1400px){
  width: auto;
}
`;
export const SearchbarWrapperOutline = styled.div`
  height: 46px;
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  border: solid 1px var(--color-system-gray-gray-5);
  background-color: var(--color-system-gray-gray-1);
  &:hover {
    border: 1px solid var(--color-system-gray-gray-21);
  }
  &::before {
    content:url(${SearchIcon}) }};
    margin-top: 5px !important;
  }
`;
