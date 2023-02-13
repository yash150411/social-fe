import styled from 'styled-components';

export const Container = styled.div`
  background: #e2e6ee;
  padding: 16px;

  border-radius: 10px;
  display: flex;

  .image img {
    width: 32px;
    margin-right: 16px;
  }
  .content h5 {
    color: #7b7b97;
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 4px;
  }
  .content p {
    color: #17082d;
    font-size: 12px;
    line-height: 18px;
    display: inline;
    display: inline-block;
    line-break: anywhere;
  }
`;
