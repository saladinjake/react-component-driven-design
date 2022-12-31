import { useNavigate } from "react-router-dom";
import StyledError from "./NotFound.styles";
import questionGuy from "../assets/img/svg/question-guy.svg";
import SampleNerveLogo from "../assets/img/svg/samplelogo.svg";
import Button from "../components/shared/library/components/Button";

export default function NotFound() {
  const history = useNavigate();

  return (
    <StyledError>
      <div className="logo">
        <img src={SampleNerveLogo} alt="sample nerve logo" className="logo-image" />
      </div>
      <img src={questionGuy} className="illustration--image" alt="" />
      <p className="info-text info-text--title">Error 404!</p>
      <p className="info-text info-text--description">
        Sorry, the page you’re looking for could not be found.
      </p>
      <div>
        <Button
          width="100%"
          color="secondary"
          variant="outline"
          onClick={() => history("/dashboard")}
        >
          Go back to Nerve
        </Button>
      </div>
    </StyledError>
  );
}
