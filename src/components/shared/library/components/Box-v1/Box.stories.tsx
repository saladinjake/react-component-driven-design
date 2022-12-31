import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";

export default {
  title: "Layout/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>Text</Box>
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  ml: ["1"],
  height: ["10/12"],
  rounded: ["sm", "md", "lg"],
  px: ["5", "10"],
  py: ["5", "10"],
  backgroundColor: ["Purple"],
  color: ["White"],
  opacity: ["0.5"],
};
