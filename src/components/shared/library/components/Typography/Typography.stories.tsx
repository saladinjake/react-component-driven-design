import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "./Typography";

export default {
  title: "Typography/Heading",
  component: Typography,
} as ComponentMeta<typeof Typography>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>Text</Typography>
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  rounded: ["none"],
  px: ["0"],
  py: ["0"],
  color: ["kudaPurple"],
};
