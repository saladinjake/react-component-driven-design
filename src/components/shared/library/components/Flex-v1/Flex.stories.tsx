import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Flex from "./Flex";

export default {
  title: "Layout/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <Flex
      backgroundColor="kudaGreen"
      height="100px"
      width="4/12"
      mr="5"
      alignItems="center"
      justifyContent="center"
    >
      Box 1
    </Flex>

    <Flex
      backgroundColor="kudaPurple"
      height="100px"
      width="4/12"
      alignItems="center"
      justifyContent="center"
    >
      Box 2
    </Flex>
  </Flex>
);

// 👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  ml: ["1"],
  rounded: ["sm", "md", "lg"],
  px: ["5", "10"],
  py: ["5", "10"],
  backgroundColor: ["kudaWhite"],
  color: ["kudaWhite"],
  direction: ["row-reverse"],
  width: "1000px",
};
