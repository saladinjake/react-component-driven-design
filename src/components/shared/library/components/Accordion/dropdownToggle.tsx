import styled from "styled-components";
import { Flex } from "components/shared/library";

const TextHelperComponent = styled.div`
  margin-right: 10px;
  color: #40196d;
  font-size: 14px;
  font-weight: bold;
  float: right;
`;

function Chevron(props) {
  return (
    <Flex alignItems="center">
      <TextHelperComponent>{props.textHelp}</TextHelperComponent>

      <svg
        className={props.className}
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.285008 2.14191L6.52482 8.30523C6.78748 8.56492 7.21184 8.56492 7.47518 8.30523L13.715 2.14191C14.095 1.76702 14.095 1.15708 13.715 0.781531C13.335 0.406644 12.7182 0.406644 12.3382 0.781531L6.99966 6.05391L1.66246 0.781531C1.28177 0.406644 0.665018 0.406644 0.285008 0.781531C-0.0950022 1.15708 -0.0950022 1.76702 0.285008 2.14191Z"
          fill="#40196D"
        />
      </svg>
    </Flex>
  );
}

export default Chevron;
