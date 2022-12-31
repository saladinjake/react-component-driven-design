import SideBar from "./SideBar";
import NavBar from "./NavBar";
import Grid from "components/shared/library/components/Grid-v1";

const Layout = ({ children }) => {
  return (
    <Grid gridTemplateColumn="330px 1fr" gridTemplateRow="56px 1fr">
      <Grid.Item
        as="nav"
        gridColumn="2 / span 2"
        backgroundColor="kudaPurple"
        top="0"
        position="sticky"
        zIndex="1"
      >
        <NavBar />
      </Grid.Item>

      <Grid.Item as="aside" gridRow="1 / span 2">
        <SideBar />
      </Grid.Item>

      <Grid.Item as="section" gridColumn="2 / span 2">
        {children}
      </Grid.Item>
    </Grid>
  );
};

export default Layout;
