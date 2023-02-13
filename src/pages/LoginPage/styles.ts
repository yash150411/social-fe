import { Card } from 'antd';
import styled from 'styled-components';

export const LoginContainer = styled.div`
  background: url('http://35.182.206.71/new_staging/public/img/backgroundgradient.png');
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  .centerd {
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100%;
    margin: 0px !important;
  }
  input {
    display: block;
    width: 100%;
    padding: 1.375rem 0;
    color: #000;
    background-color: #fff;
    background-clip: padding-box;
    border: none !important;
    font-size: 16px;
    border-bottom: 2px solid #666 !important;
    border-radius: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  input:hover {
    border: none !important;
    border-bottom: 2px solid #666 !important;
  }
  input:focus {
    border: none !important;
    border-bottom: 2px solid #666 !important;
  }
  .LoginView {
    margin-bottom: 1rem;
  }
`;

export const LoginCard = styled(Card)`
  padding: 36px 52px 39px 53px;
  margin-top: 10px;
  width: 467px;
  margin: 0 auto;
  border-radius: 0.35rem;
  background-color: white;
  @media (max-width: 768px) {
    width: 100%;
  }
  .ant-card-body {
    padding: 0px;
  }
  h4 {
    font-weight: 400;
  }
  @media (max-width: 768px) {
    .loginBtn {
      flex-direction: column;
    }
  }
`;
