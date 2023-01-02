import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Skeleton from "components/shared/Skeleton";
import Box from "components/shared/library/components/Box";

function SideBarItem(props) {
  const { name, link, isLoading, menuItem, Icon} = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  if (isLoading) {
    return (
      <Box mb="5">
        <Skeleton height="14px" width="100%" />
      </Box>
    );
  }

  return <Content onClick={handleClick}>
    <span className="icon-set">{Icon}</span>
       {name}
    </Content>;
}

export default SideBarItem;

const Content = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #b1c9f8;
  padding: 7px;
  margin-bottom: 5px;
  transition: all 0.6s;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family:"Work Sans";
  margin-left:15px;

  .icon-set{
     margin-right:10px;
     font-size:16px;
  }
 

  &:hover {
    background: #39CDCC;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    border-radius: 5px;
   
    color: #213F7D;
  }
`;
