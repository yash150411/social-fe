import styled from 'styled-components';
import { Button } from 'antd';

export const PrimaryBtn = styled(Button)`
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
    background: #000 !important;
    border-color: #000 !important;
  }
  &:disabled {
    border: 0px;
    cursor: default;
    background: #b4b4b4 !important;
    border: 1px solid #b4b4b4 !important;
    color: #fff !important;
  }
  &:focus {
    background: #000 !important;
    border-color: #000 !important;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 120px;
  }
`;

export const SecondaryBtn = styled(Button)`
  background: transparent;
  border-color: #000;
  font-weight: 400;
  font-size: 16px;
  border-radius: 5px;
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
    background: transparent;
    border-color: #000;
    color: #000;
  }
  &:disabled {
    background: transparent !important;
    color: var(--color-system-gray-gray-15) !important;
    cursor: default;
  }
  img {
    width: 24px;
    margin-right: 6px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    min-width: 120px;
  }
`;

export const GhostBtn = styled(Button)`
  background-color: transparent;
  background: transparent;
  border: none;
  border-radius: 0px;
  height: auto;
  font-size: 16px;
  line-height: 19pxs;
  font-weight: 400;
  letter-spacing: 0px;
  color: #000;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  box-shadow: none !important;
  &:hover {
    color: #000;
  }
  img {
    width: 24px;
    margin-right: 6px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
