import styled from "styled-components";

import Base from "../Base";

import manageBreakpoints from "../../utilities/manageBreakpoints";
import libraryConfig from "../../libraryConfig";

interface ITypographyProps {
  fontSize?:
    | Array<keyof typeof libraryConfig.fontSizes>
    | keyof typeof libraryConfig.fontSizes;
  align?: "left" | "right" | "center";
  fontWeight?:
    | Array<keyof typeof libraryConfig.fontWeights>
    | keyof typeof libraryConfig.fontWeights;
  fontFamily?: string;
  letterSpacing?: Array<string> | string;
  listStyle?: Array<string> | string;
}

const Typography = styled(Base)<ITypographyProps>`
  ${({ fontSize, theme }) =>
    manageBreakpoints("font-size", fontSize, theme, libraryConfig.fontSizes)};

  ${({ fontWeight, theme }) =>
    manageBreakpoints(
      "fontWeight",
      fontWeight,
      theme,
      libraryConfig.fontWeights
    )};

  ${({ align, theme }) => manageBreakpoints("text-align", align, theme)};

  ${({ letterSpacing, theme }) =>
    manageBreakpoints("letter-spacing", letterSpacing, theme)};

  ${({ listStyle, theme }) =>
    manageBreakpoints("list-style", listStyle, theme)};
`;

export default Typography;
