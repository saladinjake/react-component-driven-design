import React from "react";
import Select from "./Select";

export default {
  title: "Form/Select",
  component: Select,
};

export const DropDown = () => {
  return <Select label="User Role" required width="314px" placeholder="e.g. Super Administrator" options={[{name:"Quality Assurance"}, {name:"Super Administrator"}]} />
};
