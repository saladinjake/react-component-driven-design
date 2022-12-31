import styled from "styled-components";
import Loader from "../components/shared/Loader";
export default function Fallback() {
  return (
    <StyledFallbackLoader>
      <Loader variant={"purple"} />
    </StyledFallbackLoader>
  );
}

const StyledFallbackLoader = styled.div `
    margin-top: 20px;
`;
