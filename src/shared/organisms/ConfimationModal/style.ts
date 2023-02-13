import styled from 'styled-components';
import { Flex } from '@atom/Flex';
import '@constant/color/Color.css';

export const ModalWrapper = styled(Flex)`
  .title {
    font-size: 20px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--color-system-gray-gray-10);

    @media (max-width: 768px) {
      font-size: 26px!important;
    }

  .description {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: var(--color-system-gray-gray-10);
  }

  .cancel-btn {
    // margin-left: 15px;
  }

  .divider-Line {
    height: 1px;
    background-color: var(--color-system-gray-gray-5);
  }
  .ant-modal-body {
    margin-bottom: 0px !important;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  .ant-modal-body {
    margin-bottom: 0px !important;
  }
`;
