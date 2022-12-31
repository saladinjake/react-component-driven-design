import Modal from "./Modal";
import { ModalProps } from "./Modal";
import { Svg } from "../../../assets/svg";


import Button from "../../shared/library/components/Button";
import StyledConfirmationModal from "./Confirmation.styles";

type ConfirmationProps = ModalProps & {
  handleSubmit: () => void;
  handleCancel: () => void;
  isSubmitting?: boolean;
};

const { attentionIcon } = Svg;
const Confirmation: React.FC<ConfirmationProps> = ({
  showModal,
  title,
  width,
  isSubmitting,
  handleSubmit,
  handleCancel,
}) => {
  // const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Modal
      showModal={showModal}
      title={title}
      primaryBtn={
        <Button
          loading={isSubmitting}
          onClick={() => {
            handleSubmit();
          }}
          width="138px"
        >
          Yes
        </Button>
      }
      secondaryBtn={
        <Button
          onClick={() => {
            handleCancel();
          }}
          variant="outline"
          color="secondary"
          width="138px"
        >
          No
        </Button>
      }
      width={width}
    >
      <StyledConfirmationModal>
        <div className="content">Are you sure you want to proceed?</div>
        <img src={attentionIcon} alt="confirm" />
      </StyledConfirmationModal>
    </Modal>
  );
};

export default Confirmation;
