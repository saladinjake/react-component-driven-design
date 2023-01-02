import styled from "styled-components";

export const TableFilter = styled.div`
  .filters {
    width: 350px;
    background: #fff;
    padding: 10px;
    margin: 20px;
    position: absolute;
    top: 580px;
    left: 360px;
    z-index: 2;
    -moz-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.7);
    box-shadow: 0 0 3px 0px 2px 2px rgba(0, 0, 0, 0.7);
    border: 2px solid #f6f6f6;

    p {
      font-size: 13px;
      font-weight: 600;
      margin-right: 10px;
      white-space: nowrap;
    }

    select {
      font-size: 11px;
      line-height: 13px;
      border: 1px solid #dbdce0;
      border-radius: 4px;
      height: 36px;
      width: fit-content;
    }
  }

  .input-field--wrap {
    margin-bottom: 0;
  }
`;
