import styled from "styled-components";

export const TableFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  .table-filter {
    display: flex;
  }

  .filters {
    display: flex;
    align-items: center;
    justify-content: center;

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

  .filters-dropdown-container {
    width: 75%;
    display: flex;
    align-items: center;
  }

  .filter-item {
    width: 20%;
    margin-right: 10px;
    @media only screen and (max-width: 1024px) {
      width: unset;
    }
  }

  .filter-global-search-container {
    width: 33%;
   
  }

  .filter-wrapper {
    margin-right: 10px;
    width: 15%;
  }

  .input-field {
    padding: 8px 14px;
    background-color: #ffffff;
    border: 1px solid #dfe3e9;
    box-sizing: border-box;
    border-radius: 5px;
    min-height: 46px;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
    appearance: none;
    background: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='5' viewBox='0 0 8 5' fill='none'%3e%3crect y='0.707031' width='1' height='5' rx='0.5' transform='rotate(-45 0 0.707031)' fill='%23BEBEBE'/%3e%3crect x='6.36328' width='1' height='5' rx='0.5' transform='rotate(45 6.36328 0)' fill='%23BEBEBE'/%3e%3c/svg%3e")
      no-repeat;

    background-size: 14px;
    background-position: right 10px top 18px;
    padding-right: 55px;
    width: "fit-content";
  }

  .input-field--wrap {
    margin-bottom: 0;
  }
`;
