import { ButtonComponent } from "./styles";

import { ButtonProps } from "./types";

// Как типизировать props
function Button({
  disabled = false,
  isRed = false,

  name,
  type = "button",
  onClick = () => {},
}: ButtonProps) {
  return (
    <ButtonComponent
      disabled={disabled}
      isRed={isRed}
      className="button-component"
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
