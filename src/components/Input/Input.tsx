import {
  InputComponentContainer,
  InputComponentLabel,
  InputComponent,
} from "./styles";

import { InputProps } from "./types";

function Input({
  disabled,
  id,
  name,
  placeholder,
  label,
  type = "text",
}: InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel htmlFor={id}>{label}</InputComponentLabel>
      <InputComponent
        disabled={disabled}
        name={name}
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </InputComponentContainer>
  );
}

export default Input;
