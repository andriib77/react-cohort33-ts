import { CounterProps } from "./types";

import { CounterWrapper, ButtonControl, Count } from "./styles";

import Button from "../Button/Button";

function Counter({ count, onMinus, onPlus }: CounterProps) {
  // Управление сотстоянием происходит в самом компоненте
  // // Создаем state для нашего Counter
  // const [count, setCount] = useState(0);

  // // Создаем функцию, которая будет увеличивать наш count на 1
  // const onPlus = () => {
  //   setCount((prevValue) => {
  //     return prevValue + 1;
  //   });
  // };

  // // Создаем функцию, которая будет уменьшать наш count на 1
  // const onMinus = () => {
  //   setCount((prevValue) => prevValue - 1);
  // };
  return (
    <CounterWrapper>
      <ButtonControl>
        <Button name="-" onClick={onMinus} />
      </ButtonControl>
      <Count className="count">{count}</Count>
      <ButtonControl>
        <Button name="+" onClick={onPlus} />
      </ButtonControl>
    </CounterWrapper>
  );
}

export default Counter;
