import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      White: string;
      Blue: string;
      Yellow: string;
      Green: string;
      Purple: string;
      DarkPurple: string;
      Black: string;
      Red: string;
      DarkRed: string;
      Grey: string;
      DarkGrey: string;
      LightGrey: string;
      LighterGrey: string;
      LightPurple: string;
      InactivePurple: string;
      LightBlue: string;
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
