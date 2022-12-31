import React from "react";
import Status from "./Status";

export default {
  title: "Data Display/Status",
  component: Status,
};

export const Active = () => {
  return <Status statusText="Active" active="active" />;
};

export const Inactive = () => {
  return <Status statusText="Active" />;
};
