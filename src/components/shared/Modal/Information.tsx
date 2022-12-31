import Modal from "./Modal";
import { ModalProps } from "./Modal";

const Information: React.FC<ModalProps> = ({
  showModal,
  width,
  title,
  children,
  subtitle,
}) => {
  return (
    <Modal
      title={title}
      subtitle={subtitle}
      showModal={showModal}
      width={width}
    >
      {children}
    </Modal>
  );
};

export default Information;
