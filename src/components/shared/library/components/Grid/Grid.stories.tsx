import React from "react";
import Grid from "./Grid";
import GridItem from './GridItem';
import Box from '../Box';

export default {
  title: "Data Display/Grid",
  component: Grid,
};

export const DefaultGrid = () => {
  return (
    <>
      <Grid templateColumn="200px repeat(auto-fill, 100px) 300px">
        <GridItem colStart={2} colSpan={2}>
          <Box>
            Hello
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};
