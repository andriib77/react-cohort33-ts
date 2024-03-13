import Message from "../Message/Message";
import { StyledCardWraper } from "./styled";

function Card() {
  return (
    <StyledCardWraper>
      <span>Имя: Андрей</span>
      <span>Фамилия: Андреев</span>
      <Message />
    </StyledCardWraper>
  );
}

export default Card;
