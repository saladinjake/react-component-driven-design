import { ThemeProvider, DefaultTheme } from "styled-components";

export const colors = {
  White: "#FFFFFF",
  Blue: "#1DCBEF",
  Yellow: "#FFC83E",
  Green: "#48D38A",
  Purple: "#40196D",
  DarkPurple: "#EFF1FF",
  Black: "#000000",
  Red: "#F7685B",
  DarkRed: "#FFDBDB",
  Grey: "#CACACA",
  DarkGrey: "#979797",
  LightGrey: "#F9F9F9",
  LighterGrey: "#F4F4F4",
  LightPurple: "#8369A0",
  InactivePurple: "#EFF1FF",
  LightBlue: "#DBF8FF",
  Text: "#213F7D",
  TextBasic:"#545F7D"
};

const fontSizes = {
  small: "1em",
  medium: "2em",
  large: "3em",
};

const radiuses = {
  sm: "5px",
};

const breakPoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
  radiuses,
  breakPoints,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
