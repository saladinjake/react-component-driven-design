import styled from "styled-components";
import theme from "../../theme";

const StyledStatus = styled.div<{
  spaceBetweenTextAndIcon?: string;
  active?: "active" | boolean;
  inactive?: "inactive" | boolean;
}>`
  display: flex;
  align-items: center;
  color: #000;

  .status-icon {
    font-size: 8px;
    margin-right: ${({ spaceBetweenTextAndIcon = "5px" }) =>
      spaceBetweenTextAndIcon};
  }

  .status-icon--active {
    color: ${(props) => theme.colors.Green};
  }

  .status-icon--inactive {
    color: ${(props) => theme.colors.Red};
  }
`;

export default StyledStatus;
