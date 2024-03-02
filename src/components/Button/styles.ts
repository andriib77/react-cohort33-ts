import styled from "@emotion/styled";

interface ButtonComponentProps {
  isRed: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  margin-top: 30px;
  padding: 20px;
  background-color: ${({ disabled, isRed }) =>
    disabled ? "gray" : isRed ? "red" : "#1f27f5"};
  color: white;
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
`;

export const ButtonRed = styled(ButtonComponent)`
  background-color: red;
`;
