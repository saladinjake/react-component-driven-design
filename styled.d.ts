import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      kudaWhite: string;
      kudaBlue: string;
      kudaYellow: string;
      kudaGreen: string;
      kudaPurple: string;
      kudaDarkPurple: string;
      kudaBlack: string;
      kudaRed: string;
      kudaDarkRed: string;
      kudaGrey: string;
      kudaDarkGrey: string;
      kudaLightGrey: string;
      kudaLighterGrey: string;
      kudaLightPurple: string;
      kudaInactivePurple: string;
      kudaLightBlue: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    radiuses: {
      sm: string;
    };

    breakPoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
    };
  }
}
