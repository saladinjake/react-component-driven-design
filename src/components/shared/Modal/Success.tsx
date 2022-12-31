import { ReactNode } from "react";
import Modal from "./Modal";
import { ModalProps } from "./Modal";
import { Svg } from "../../../assets/svg";
import Button from "../../shared/library/components/Button";
import StyledSuccessModal from "./Success.styles";

const { successAnimation } = Svg;

type SuccessProps = ModalProps & {
  handleOkay: () => void;
  message?: string;
  children?: ReactNode;
};

const Success: React.FC<SuccessProps> = ({
  showModal,
  title,
  message,
  width,
  handleOkay,
  children,
}) => {
  return (
    <Modal
      showModal={showModal}
      title={title}
      primaryBtn={<Button onClick={handleOkay}>Okay</Button>}
      width={width}
    >
      <StyledSuccessModal>
        <img src={successAnimation} alt="successful" />
        <div className="content">{children ? children : <p>{message}</p>}</div>
      </StyledSuccessModal>
    </Modal>
  );
};

export default Success;
