import styled from 'styled-components';
import { H1 } from '@constant/typography/Typography';

export const Wrapper = styled.div<{ isBottom?: boolean }>`
  margin-bottom: 0px;
  padding-bottom: ${(props: any) => (props?.isBottom ? '0px' : '20px')};
  &.bordered {
    border-bottom: 1px solid #eee !important;
    margin-bottom: 24px;
  }
  .ant-btn img {
    width: 16px;
  }
  @media (max-width: 768px) {
    &.bordered {
      margin-bottom: 20px;
    }
    .ant-btn-ghost {
      padding: 4px 2px;
      font-size: 12px !important;
    }

    .mobile-fixing {
      display: ${(props: any) => (props?.isBottom ? 'block' : 'flex')};

      h1 {
        min-width: ${(props: any) => (props?.isBottom ? '320px' : '')};
      }
    }
    .btn-fixing {
      justify-content: ${(props: any) => (props?.isBottom ? 'left' : 'right')};
      margin-top: 8px;
      margin-bottom: 8px;
      .span {
        font-size: ${(props: any) => (props?.isBottom ? '12px' : '')};
      }
    }
  }
`;

export const TitleH1 = styled(H1)`
  color: var(--color-system-gray-gray-10);
  padding-right: 10px;
  @media (max-width: 768px) {
    line-height: 24px;
    font-size: 18px;
  }
`;
