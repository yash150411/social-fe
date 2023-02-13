import { Modal } from 'antd';
import styled from 'styled-components';

import { H3Typography } from '@constant/typography/Typography';

export const ModalWrapper = styled(Modal)<{ width: any; align?: any; padding?: any }>`
  width: 100% .ant-modal {
    text-align: center !important;
  }

    font-style: normal;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 19px !important;
    margin-bottom: 32px !important;
  }
  .ant-modal-title {
    //padding: 16px 0px;
    font-size: 26px !important;
    line-height: 31px !important;
    margin-bottom: 16px !important;
    font-weight: 600;
    text-align: center;
  }
  .ant-modal {
    padding-bottom: 0px;
   
  }
  .ant-modal-content {
    position: relative;
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-radius: 5px;
    padding: ${(props: any) => props?.padding || '2rem'};
    min-width: fit-content;
    width: ${(props: any) => props?.width || '560px'};
    overflow-x: auto !important;
    max-height: 700px;
  }
  .ant-modal-header {
    border-bottom: none;
    padding-bottom: 0px;
  }
  .ant-modal-body {
    padding: 0px;
    text-align: ${(props: any) => props?.align || 'center'};
    border-top: none;
    font-style: normal;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 19px !important;
    margin-bottom: 40px !important;
  }
  .modalpara {
    font-size: 14px;
    line-height: 22px;
    color: #50514f;
    font-weight: 400;
    display: initial;
    text-align: center;
    justify-content: center;
    display: flex;
  }
  .ant-modal-close-icon {
    display: initial;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
  }

  // .ant-btn-default {
  //   min-width: 169px !important;
  //   background: 0 0;
  //   border: 2px solid #000;
  //   font-weight: 700;
  //   border-radius: 5px;
  //   color: #000;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 19px;
  //   align-items: center;
  //   text-align: center;
  //   text-transform: capitalize;
  //   padding: 12px 8px;
  //   min-width: 149px;
  //   height: 49px;
  //   display: inline-block;
   
  // }
  // .ant-btn-primary {
  //   background: #000;
  //   border-radius: 5px;
  //   color: #fff;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 19px;
  //   align-items: center;
  //   text-align: center;
  //   text-transform: capitalize;
  //   color: #fff;
  //   padding: 12px 8px;
  //   border: 1px solid #000;
  //   min-width: 149px;
  //   height: 49px;
  //    display: inline-block;
  // }

  .ant-modal-footer{
    display:none;
  }

  @media (max-width: 768px) {
    .ant-modal-content {
      padding: 2rem;
      width:100% !important;
      width: ${(props: any) => props?.width || '100%'} !important;
      justify-content: center !important;
      display: flex !important;
      transform: translate(-50%, 0%);
      top: 50%;
  left: 50%;
    }
    .ant-modal{
      width:100% !important !important;
    }
  }

`;

export const Title = styled(H3Typography)`
  margin-bottom: 8px;
`;
