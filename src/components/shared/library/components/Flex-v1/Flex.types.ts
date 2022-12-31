export const flexDisplays = {
  center: "center",
  between: "space-between",
  around: "space-around",
  even: "space-even",
  start: "flex-start",
  end: "flex-end",
};

export default interface FlexIProps {
  direction?: string;
  wrap?: string;
  alignItems?: keyof typeof flexDisplays;
  justifyContent?: keyof typeof flexDisplays;
}
