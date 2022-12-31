import styled from "styled-components";

export const StyledNav = styled.div`
  .nav-link {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #979797;
    padding: 12px;
    margin-bottom: 12px;
    transition: all 0.6s;
    width: 100%;

    &:hover {
      background: #ffffff;
      box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
      border-radius: 5px;
      opacity: 0.9;
    }
  }

  .nav-link__active {
    background: #ffffff;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.kudaPurple};
  }
`;
