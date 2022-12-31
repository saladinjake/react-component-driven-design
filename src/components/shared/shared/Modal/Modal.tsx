import { createPortal } from "react-dom";
import {
  StyledModalBackground,
  StyledModalMain,
  StyledModalContent,
} from "./Modal.styles";
import ModalHeader from "./ModalHeader";
import ModalFooter from "./ModalFooter";

export type ModalProps = {
  showModal?: boolean;
  width?: string;
  children?: React.ReactNode;
  secondaryBtn?: React.ReactNode;
  primaryBtn?: React.ReactNode;
  title?: string;
  subtitle?: string;
};

function Modal({
  showModal,
  width,
  children,
  secondaryBtn,
  primaryBtn,
  title,
  subtitle,
}: ModalProps): React.ReactPortal {
  if (!showModal) return null;
  return createPortal(
    <>
      <StyledModalBackground>
        <StyledModalMain width={width}>
          {title ? <ModalHeader title={title} subtitle={subtitle} /> : ""}
          <StyledModalContent>{children}</StyledModalContent>
          {primaryBtn || secondaryBtn ? (
            <ModalFooter secondaryBtn={secondaryBtn} primaryBtn={primaryBtn} />
          ) : (
            ""
          )}
        </StyledModalMain>
      </StyledModalBackground>
    </>,
    document.body
  );
}

export default Modal;
