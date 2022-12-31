import React from "react";
import Radio from "./Radio";

export default {
  title: "Form/Radio",
  component: Radio,
};

export const CheckableRadio = () => {
  return <Radio label="True" value="true" radioButtonColor="#48D38A" disabled={false} name="approval" />
};
