import styled from "styled-components";

import manageBreakpoints from "../../utilities/manageBreakpoints";
import libraryConfig from "../../utilities/libraryConfig";
import IBaseProps from "./Base.types";

const { spacing, perimeters } = libraryConfig;

const Base = styled.div<IBaseProps>`
  ${({ mt, my, m, theme }) =>
    (mt || my || m) &&
    manageBreakpoints("margin-top", mt || my || m, theme, spacing)};

  ${({ mb, my, m, theme }) =>
    (mb || my || m) &&
    manageBreakpoints("margin-bottom", mb || my || m, theme, spacing)};

  ${({ ml, mx, m, theme }) =>
    (ml || mx || m) &&
    manageBreakpoints("margin-left", ml || mx || m, theme, spacing)};

  ${({ mr, mx, m, theme }) =>
    (mr || mx || m) &&
    manageBreakpoints("margin-right", mr || mx || m, theme, spacing)};

  ${({ pt, py, p, theme }) =>
    (pt || py || p) &&
    manageBreakpoints("padding-top", pt || py || p, theme, spacing)};

  ${({ pb, py, p, theme }) =>
    (pb || py || p) &&
    manageBreakpoints("padding-bottom", pb || py || p, theme, spacing)};

  ${({ pl, px, p, theme }) =>
    (pl || px || p) &&
    manageBreakpoints("padding-left", pl || px || p, theme, spacing)};

  ${({ pr, px, p, theme }) =>
    (pr || px || p) &&
    manageBreakpoints("padding-right", pr || px || p, theme, spacing)};

  ${({ width, theme }) =>
    width && manageBreakpoints("width", width, theme, perimeters)};

  ${({ height, theme }) =>
    height && manageBreakpoints("height", height, theme)};

  ${({ position, theme }) =>
    position && manageBreakpoints("position", position, theme)};

  ${({ rounded, theme }) =>
    rounded &&
    manageBreakpoints("border-radius", rounded, theme, libraryConfig.rounds)};

  ${({ cursor, theme }) =>
    cursor && manageBreakpoints("cursor", cursor, theme)};

  ${({ backgroundColor, theme }) =>
    backgroundColor &&
    manageBreakpoints(
      "background-color",
      backgroundColor,
      theme,
      libraryConfig.colors
    )};

  ${({ color, theme }) =>
    color && manageBreakpoints("color", color, theme, libraryConfig.colors)};

  border: ${(props) => props.border && props.border};

  ${({ borderWidth, theme }) =>
    borderWidth && manageBreakpoints("border-width", borderWidth, theme)};

  ${({ borderColor, theme }) =>
    borderColor && manageBreakpoints("border-color", borderColor, theme)};

  ${({ borderStyle, theme }) =>
    borderStyle && manageBreakpoints("border-style", borderStyle, theme)};

  ${({ borderBottomColor, theme }) =>
    borderBottomColor &&
    manageBreakpoints("border-bottom-color", borderBottomColor, theme)};

  ${({ borderBottomStyle, theme }) =>
    borderBottomStyle &&
    manageBreakpoints("border-bottom-style", borderBottomStyle, theme)};

  ${(props) => props.top && `top: ${props.top}`};

  ${({ opacity, theme }) =>
    opacity && manageBreakpoints("opacity", opacity, theme)};

  ${({ zIndex, theme }) =>
    zIndex && manageBreakpoints("z-index", zIndex, theme)};

  ${({ transition, theme }) =>
    transition && manageBreakpoints("transition", transition, theme)};
`;

export default Base;
