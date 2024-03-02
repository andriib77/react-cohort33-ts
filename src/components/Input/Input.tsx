import {
  InputComponentContainer,
  InputComponentLabel,
  InputComponent,
} from "./styles";

import { InputProps } from "./types";

function Input({
  disabled = false,
  id,
  name,
  placeholder,
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <InputComponentContainer>
      <InputComponentLabel htmlFor={id}>{label}</InputComponentLabel>
      <InputComponent
        value={value}
        onChange={onChange}
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
