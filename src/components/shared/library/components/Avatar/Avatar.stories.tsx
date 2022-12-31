import React from "react";

import Avatar from "./Avatar";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
};

export const Small = () => {
  return <Avatar size="sm" type="text" />;
};

export const Medium = () => {
  return <Avatar size="md" type="text" />;
};

export const Large = () => {
  return <Avatar size="lg" type="text" />;
};

export const Shape = () => {
  return <Avatar shape="rounded" type="text" />;
};
