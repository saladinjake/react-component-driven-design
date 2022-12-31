import React from "react";
import Loader from "./Loader";

export default {
  title: "Feedback/Loader",
  component: Loader,
};

export const Variant = () => {
  return (
    <>
     <Loader variant="white" />
      <Loader variant="purple" />
    </>
  );
};
