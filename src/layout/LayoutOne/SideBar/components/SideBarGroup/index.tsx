import { useState, useRef } from "react";
import styles from "./SideBarGroup.styles";
import { Svg } from "assets/svg";
import SideBarItem from "../SideBarItem";
import useContainerDimensions from "utils/hooks/useContainerDimensions";
import Text from "components/shared/library/components/Text-v1";
import Box from "components/shared/library/components/Box";
import { Flex } from "components/shared/library"

function constructNavUrl(navName: string): string {
  const navNameWithoutSpace = navName.toLowerCase().replaceAll(" ", "-");
  return `/${navNameWithoutSpace}`;
}

function SideBarGroup(props) {
  const { menuItems, name = "Front Office", searchQuery, isLoading } = props;

  const menuItemsContainerRef = useRef();
  const { height } = useContainerDimensions(menuItemsContainerRef, [
    searchQuery,
    isLoading,
  ]);
  const [showMenu, setShowMenu] = useState(true);

  return (
    <Box>
      <Flex
        style={{ paddingLeft: 12 }}
        alignItems="center"
        justifyContent="between"
      >
        <Text
          fontSize="13px"
          color={showMenu ? "#40196D" : "#979797"}
          fontWeight="600"
        >
          {name}
        </Text>

        {!isLoading && (
          <styles.Button onClick={() => setShowMenu(!showMenu)}>
            <styles.ButtonContentWrapper flip={showMenu}>
              <Svg.FilledArrow />
            </styles.ButtonContentWrapper>
          </styles.Button>
        )}
      </Flex>

      {isLoading &&
        Array(8)
          .fill({})
          .map((_, i) => {
            return <SideBarItem key={i} isLoading={isLoading} />;
          })}

      {!isLoading && (
        <styles.Container listHeight={height.toString()} showMenu={showMenu}>
          <Box
            ref={menuItemsContainerRef}
            opacity={showMenu ? "1" : "0"}
            pt="5"
            pb="10"
            style={{
              transition: "0.5s",
            }}
          >
            {menuItems.map((menuItem, i) => {
              const navElementName = menuItem["name"];
              return (
                <SideBarItem
                  key={i}
                  name={navElementName}
                  index={i}
                  menuItem={menuItem}
                  link={constructNavUrl(navElementName)}
                />
              );
            })}
          </Box>
        </styles.Container>
      )}
    </Box>
  );
}

export default SideBarGroup;
