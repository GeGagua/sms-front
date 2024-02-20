import { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  small?: boolean;
  light?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  color: #fff;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  border: 0;
  outline: 0;
  background: #56668d;
  border-radius: 8px;
  padding: 24px 60px;
  cursor: pointer;
  margin-top: 40px;
  transition: all 0.3s eas-in-out;

  &:hover {
    background: #445170;
  }

  ${({ small }) =>
    small &&
    css`
        padding: 12px 30px;
        font-size: 16px;
        line-height: 24px;
    `}

  ${({ light }) =>
    light &&
    css`
        background: rgba(9, 30, 66, 0.06);
        color: #172B4D;

        &:hover {
          color: #fff;
        }
    `}
`;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
