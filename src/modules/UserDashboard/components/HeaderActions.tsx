import { Button,Flex, Box  } from "components/shared/library";


interface IProps {
  setEditable: (value: boolean) => void;
  isActive: boolean;
  handleStatusUpdate: () => void;
}

function HeaderActions(props: IProps) {
  const { setEditable, isActive, handleStatusUpdate } = props;

  return (
    <Flex>
      <Box mr="4">
        {(
          <>
           <Button color="danger" onClick={handleStatusUpdate}>
            BLACK LIST USER
          </Button>
       
         
          </>
         
        )}
      </Box>

      <Box  mr="4">
      <Button color="primary"  onClick={handleStatusUpdate}>
            ACTIVATE USER
          </Button>
      </Box>

      
    </Flex>
  );
}

export default HeaderActions;
