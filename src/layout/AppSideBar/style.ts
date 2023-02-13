import { Flex } from '@atom/Flex';
import styled from 'styled-components';

interface NavItemContainerProps {
  isMobile?: boolean;
  isSelected?: boolean;
}

export const AppSideBarContainer = styled(Flex)`
  background-color: white;
  width: 6.5rem;
  border-right: 1px solid rgba(223, 223, 223, 0.2);
  .logo {
    letter-spacing: 0.2px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.15);
    padding: 20px;
    cursor: pointer;
  }
  @media (max-width: 1007px) {
    display: none;
  }
`;
export const MenuWrapper = styled.div`
  max-height: cal(100vh-149px);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #000;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #000;
  }
`;

export const Brand = styled.span`
  font-size: 20px;
  text-align: left;
  text-transform: uppercase;
  line-height: 22px !important;
  letter-spacing: 0.2px;
  font-weight: 800;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

export const NavItemContainer = styled(Flex)`
  flex-direction: ${(props: NavItemContainerProps) => (props.isMobile ? 'row' : 'column')};
  text-align: center;
  padding: 0.75rem 1rem;
  font-size: 0.65rem;
  cursor: pointer;
  justify-content: ${(props: NavItemContainerProps) => (props.isMobile ? 'start' : 'center')};
  align-items: center;
  background-color: ${(props: NavItemContainerProps) => (props.isSelected ? '#f2d4ab' : 'white')};
  border-left: ${(props: NavItemContainerProps) =>
    props.isSelected ? '10px solid #ff8a00' : 'none'};
  img {
    width: 25px;
  }
  @media (max-width: 768px) {
    font-size: 16px !important;
    gap: 5px !important;
    img {
      margin-right: 8px;
      margin-left: 8px;
    }
  }
  &.selected {
    background-color: #f2d4ab;
    border-left: 10px solid #ff8a00 !important;
    @media (max-width: 768px) {
      border-left: none;
      // padding-left: 8px;
    }
  }
`;
