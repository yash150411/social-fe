import { Flex } from '@atom/Flex';
import styled from 'styled-components';

export const AppHeaderContainer = styled(Flex)`
  padding: 0.5rem 1rem;
  background-color: white;
  min-width: 100%;
  width: 100%;
  align-items: center;
  height: 52px;
  position: relative;
  .mobileLogo {
    align-items: center;
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
    img {
      width: 40px;
      margin-right: 10px;
    }
    span {
      font-size: 14px;
      font-weight: 700;
    }
  }
  .userProfile {
    height: 2.4rem;
    width: 2.4rem;
    object-fit: cover;
    border-radius: 100px;
  }
`;
