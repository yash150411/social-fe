import styled from 'styled-components';

export const Wrapper = styled.div`
  .ant-collapse-ghost > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box {
    padding-right: 5px;
  }
  .ant-collapse-header {
    background: var(--color-system-gray-gray-1);
  }
  .borderedPanel .ant-collapse-header {
    padding: var(--spacing-5);
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    border-bottom: solid 1px var(--color-system-gray-gray-5);
  }

  .borderedPanel .ant-collapse-item:last-child > .ant-collapse-header[aria-expanded='false'] {
    border-bottom: none;
    border-radius: 8px !important;
  }
  .borderedPanel {
    border: solid 1px var(--color-system-gray-gray-5);
    border-radius: 8px;
    margin-bottom: var(--spacing-5);
  }
  .borderedPanel .headerContent {
    display: flex;
    flex-direction: column;
  }
  .borderedPanel .ant-collapse-header {
    display: flex;
  }
  .borderedPanel {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    color: var(--color-system-gray-gray-7);
  }
  .borderedPanel .ant-collapse-content-box {
    padding: var(--spacing-5) !important;
  }
  .borderedPanel .ant-collapse-item:last-child {
    border-radius: 8px 8px 0 0 !important;
  }
  .borderedPanel .ant-collapse-item:last-child > .ant-collapse-header {
    border-radius: 8px 8px 0 0 !important;
  }
  .borderedPanel .ant-collapse-content-box {
    padding: var(--spacing-5);
  }
  .ant-collapse-extra {
    font-size: 14px;
    font-weight: 400;
    margin-left: var(--spacing-4);
    color: var(--color-system-red-red-6);
    float: unset !important;
    display: inline-flex;
  }

  .accordian-error {
    margin-bottom: var(--spacing-5);
    border: 1px solid var(--color-system-red-red-5);
    border-radius: 8px !important;
    .ant-collapse-header {
      padding: var(--spacing-5);
      border-bottom: 1px solid var(--color-system-red-red-5);
      font-size: 24px;
      line-height: 32px;
      font-weight: 600;
      border-radius: 8px 8px 0 0 !important;
    }
    .ant-collapse-header[aria-expanded='false'] {
      border-bottom: none;
      border-radius: 8px !important;
    }
    .ant-collapse-content-box {
      padding: 24px !important;
    }
  }
`;
