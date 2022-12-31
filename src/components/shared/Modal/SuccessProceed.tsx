import { ReactNode } from "react";
import Modal from "./Modal";
import { ModalProps } from "./Modal";
import { Svg } from "assets/svg";
import { Button } from "components/shared/library";
import StyledSuccessModal from "./Success.styles";

const { successAnimation } = Svg;

type SuccessProps = ModalProps & {
  handleOkay: () => void;
  handleProceed: () => void;
  proceedButtonText: string;
  message?: string;
  //   children?: ReactNode;
};

const SuccessProceed: React.FC<SuccessProps> = ({
  showModal,
  title,
  message,
  width,
  handleOkay,
  handleProceed,
  proceedButtonText,
}) => {
  return (
    <Modal
      showModal={showModal}
      title={title}
      primaryBtn={
        <Button
          width="157.5px"
          height="48px"
          variant="outline"
          color="secondary"
          onClick={handleProceed}
        >
          {proceedButtonText ? proceedButtonText : `Proceed`}
        </Button>
      }
      secondaryBtn={
        <Button width="157.5px" height="48px" onClick={handleOkay}>
          Okay
        </Button>
      }
      width={width ? width : "410px"}
    >
      <StyledSuccessModal>
        <img src={successAnimation} alt="successful" />
        <div className="content">
          <p>{message}</p>
        </div>
      </StyledSuccessModal>
    </Modal>
  );
};

export default SuccessProceed;
