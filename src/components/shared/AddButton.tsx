import styled from "styled-components";
import { Flex } from "kuda-component-library";

import { Plus } from "components/basic/SvgPack";
import Icon from "components/shared/Icons/Icon";

interface IAddButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

const AddButton = (props: IAddButtonProps) => {
  const { children, onClick } = props;

  return (
    <StyledButton type="button" onClick={onClick}>
      <Flex alignItems="center">
        <PlusButton>
          <Icon svg={Plus} />
        </PlusButton>

        <div style={{ fontWeight: 700 }}>{children}</div>
      </Flex>
    </StyledButton>
  );
};

export default AddButton;

const PlusButton = styled.div`
  background-color: #f4e6ff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;
  flex: none;
  margin-right: 5px;
  border: 0.5px solid #40196d;
`;

const StyledButton = styled.button`
  font-size: 11px;
  color: #40196d;
  border: none;
  background-color: transparent;
  padding: 0;
  display: inline-block;
  cursor: pointer;
`;
