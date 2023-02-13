import { Flex } from '@atom/Flex';
import styled from 'styled-components';

export const PageLayoutContainer = styled(Flex)`
  background-color: white;
  border-radius: 0.35rem;
  padding: 24px;
  flex-direction: column;
  @media (max-width: 786px) {
    border-radius: 0rem;
  }
  min-height: 100%;
`;
