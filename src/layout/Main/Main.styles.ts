import styled from "styled-components";

const StyledMain = styled.main`
  padding: 40px 29px;
  width: 100%;
  margin:20px;

  .main-header__main-route {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 32px 0px;
    @media only screen and (max-width: 1024px) {
      .main-header__action-area {
        min-width: 24%;
      }
    }

    a {
      font-weight: 800;
      font-size: 28px;
      line-height: 28px;
      color: #000000;
    }
  }

  .main-header__action-area {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
  }

  .main-header__sub-route {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 20px;
  }

  .main-header__sub-route-item {
    display: inline-flex;
    font-size: 15px;
    height: 30px;
    align-items: center;

    a {
      color: #000;
      font-weight: bold;
    }
  }

  .main-header__sub-route-icon {
    margin: 0 12px;
  }

  .main-body {
    padding: 20px 0px;
  }

  @media only screen and (max-width: 1024px) {
    .main-header__action-area {
      margin-top: 8px;
      
    }
  }
`;

export default StyledMain;
