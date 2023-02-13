import styled from 'styled-components';

export const TagWrapper = styled.div`
  .container {
    display: flex;
    width: 100%;
    max-width: 100%;
    padding: 0px 5px;
    border: 1px #d9d9d9 solid;
    border-radius: 5px;
    color: black;
    height: auto;
    align-items: center;
    flex-wrap: wrap;
    flex: unset !important;
    margin-bottom: 24px;
  }

  .container input {
    width: 100% !important;
    border: none;
    border-radius: 5px;
    height: auto;
    background-color: unset;
    padding: 11px 12px;
    line-height: 22px;
    align-items: center;
    flex-wrap: wrap;
    flex: unset !important;
  }

  .container input:focus {
    outline: none;
  }

  .tag {
    display: flex;
    align-items: center;
    margin-right: 10px;
    padding: 0 10px;
    padding-right: 5px;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    background-color: #f5f5f5;
    white-space: nowrap;
    color: #262626;
    flex: none;
    margin-bottom: 2px;
    margin-top: 2px;
  }

  .tag button {
    display: flex;
    padding: 6px;
    border: none;
    background-color: unset;
    cursor: pointer;
    color: #262626;
  }
`;
