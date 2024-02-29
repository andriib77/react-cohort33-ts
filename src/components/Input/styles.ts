import styled from "@emotion/styled";

export const InputComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  height: fit-content;
`;

export const InputComponentLabel = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputComponent = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px;
  outline: none;
  color: blue;
  background-color: ${({ disabled }) => (disabled ? "lightgrey" : "none")};
  color: blue;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  ::placeholder {
    color: #6f6f6f;
  }
  &:hover {
    border: ${({ disabled }) =>
      disabled ? "1px solid black" : "1px solid #1f27f5"};
  }
`;
