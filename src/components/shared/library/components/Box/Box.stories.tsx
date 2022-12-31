import Box from "./Box";

export default {
  title: "Layout/Box",
  component: Box,
};

export const Variant = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <Box>Text</Box>
    </div>
  );
};
