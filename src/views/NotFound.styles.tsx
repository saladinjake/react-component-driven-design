import styled from "styled-components";
import breakpoint from "../components/shared/breakpoint";

export default styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* min-height: 100vh; */

    .logo {
        margin: 6% 0 5%;
        @media ${breakpoint.device.mobileL}  {
            margin: 6% 0;
        }
    }

    .info-text {
        font-weight: 900;
        color: ${(props:any) => props.theme.colors.Purple};
    }

    .info-text--title {
        font-size: 250%;
        margin: 2% 0;

        @media ${breakpoint.device.mobileL}  {
            font-size: 200%;
        }
    }

    .info-text--description {
        font-size: 150%;
        margin-bottom: 1%;

        @media ${breakpoint.device.mobileL}  {
            width: 95%;
            margin: 1% auto;
            text-align: center;
            font-size: 100%;
            line-height: 22px;
        }
    }
`;