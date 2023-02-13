import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
  .site-layout-background {
    padding: 24px;
    max-height: calc(100vh - 52px);
    min-height: calc(100vh - 52px);
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    @media (max-width: 768px) {
      padding: 5px 0px;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 15px;
    }
  }
`;

export const ScrollToTopWrapper = styled.button`
  position: fixed;
  right: 2rem;
  bottom: 1rem;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: #fff;
  background: rgba(90, 92, 105, 0.5);
  line-height: 35px;
  border-radius: 0.35rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 1rem;
  }

  .anticon {
    stroke: white;
    stroke-width: 100px;
  }
`;
