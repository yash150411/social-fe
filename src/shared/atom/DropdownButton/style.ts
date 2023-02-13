import { Button, Dropdown, Menu } from 'antd';
import styled from 'styled-components';

export const DropdownContainer = styled(Dropdown)``;

export const CustomMenu = styled(Menu)`
  background: black;
  margin-top: -9px;
  margin-left: 1px;
  width: 100%;
  border-radius: 0px 0px 5px 5px;
  padding-bottom: 1px;

  .ant-dropdown-menu {
    &:hover {
      background: black !important;
    }
  }

  .ant-space-item {
    &:hover {
      color: white !important;
    }
  }

  .ant-dropdown-menu-item {
    background: black !important;
    color: #fff;
    font-size: 16px;
    line-height: 19px;
    height: 45px;
    text-align: center;
    font-family: Lato, sans-serif;
    &:hover {
      background: #e4a85380 !important;
    }
  }

  .ant-dropdown-menu-title-content {
    color: #fff !important;
  }

  .ant-dropdown-menu-item:last-of-type {
    border-radius: 3px;
  }
`;
export const DropdownButtonContainer = styled.div`
  background: #000;
  border-radius: 5px;
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  padding: 12px 8px;
  border: 1px solid #000;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 149px;
  height: auto;

  &:hover {
    background: #000;
    color: #fff;

    padding: 12px 8px;
  }

  &:active {
    background: #000;
    color: #fff;
  }

  &:focus {
    background: #000;
    color: #fff;
  }

  &:disabled {
    border: 0px;
    background-color: var(--color-system-gray-gray-6) !important;
    color: var(--color-system-gray-gray-4) !important;
    cursor: default;
  }
`;
