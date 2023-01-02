import styled from "styled-components";

export const TableStyle = styled.div`
  .table-content {
    border-radius: 8px;
    overflow-x: scroll;
    border: 1px solid #dfe2e5;
    padding: 0;
    @media only screen and (max-width: 1024px) {
      ::-webkit-scrollbar {
        height: 5px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 5px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    }
  }
  table {
    background: #ffffff;
    box-sizing: border-box;
    width: 100%;
  }

  thead {
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #545F7D;
    background: #fff;
    th {
      border: 0;
    }
  }

  tbody {
    tr {
      font-size: 13px;
      line-height: 20px;
      color: #545F7D;
    }
  }

  th {
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    // text-transform: uppercase;
    color: #545F7D;
  }

  td {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #545F7D;
    /* min-width: 200px; */
    max-width: 300px;
    word-wrap: break-word;
  }

  td,
  th {
    text-align: left;
    padding: 16px 30px;
    border-top: 1px solid #dfe2e5;
  }
`;