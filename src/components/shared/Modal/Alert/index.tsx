import React from "react";
import styled from "styled-components";
import { Box, Flex } from "components/shared/library";

import Modal, { ModalProps } from "../Modal";
import { Button } from "../../library";
import { ReactComponent as Info } from "assets/img/svg/info.svg";

type ErrorProps = ModalProps & {
  handleContinue: () => void;
  handleCancel: () => void;
  message: string;
  isLoading?: boolean;
  Icon? : any;
};

const Error: React.FC<ErrorProps> = ({
  showModal,
  title,
  message,
  width = "415px",
  handleCancel,
  handleContinue,
  isLoading,
  Icon = null
}) => {
  return (
    <Modal showModal={showModal} width={width}>
      <Box py="6">
        <Box mb="14">
          <Title>{title}</Title>
        </Box>
         <>
         {Icon!==null ? Icon: <Info /> }
         </>
        

        <Box as="p" mb="10" mt="12">
          {message}
        </Box>

        <ModalFooter>
          <Flex justifyContent="between">
            <Button
              width="47%"
              size="lg"
              loading={isLoading}
              onClick={handleContinue}
            >
              Yes
            </Button>

            <Button
              width="47%"
              size="lg"
              variant="outline"
              color="secondary"
              onClick={() => handleCancel()}
            >
              No
            </Button>
          </Flex>
        </ModalFooter>
      </Box>
    </Modal>
  );
};

export default Error;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 800;
  line-height: 27px;
  width: 70%;
  margin: 0 auto;
`;

const ModalFooter = styled.div`
  width: 90%;
  margin: 0 auto;
`;
