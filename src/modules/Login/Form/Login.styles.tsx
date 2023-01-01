import styled from "styled-components";
import { ReactComponent as LoginIllustration } from "assets/img/svg/login-illustration.svg";

export const LoginWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 661px;
  height: 485px;
  border: none;
  background: #fff;
  padding: 48px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top:20px;
  top:20px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.Text};
  font-size: 34px;
  font-weight: 900;
  text-align: left;
`;

export const Logo = styled.img`
  width: 132px;
`;



