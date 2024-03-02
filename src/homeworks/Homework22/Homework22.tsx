import { HomeworkWrapper, ContainerWrapper } from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { ChangeEvent, useState } from "react";

function Homework22() {
  const [inputValue1, setInputValue1] = useState<string>("");
  const [inputValue2, setInputValue2] = useState<string>("");

  const onChangeInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const onChangeInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };
  return (
    <HomeworkWrapper>
      <ContainerWrapper>
        <Input
          value={inputValue1}
          onChange={onChangeInput1}
          disabled={false}
          id="exampleId"
          name="exampleName"
          placeholder="Enter..."
          label="name"
          type="text"
        />
        <Input
          value={inputValue2}
          onChange={onChangeInput1}
          disabled={true}
          id="exampleId"
          name="exampleName"
          placeholder="Enter..."
          label="name"
          type="text"
        />
        <Button disabled={false} type="button" name="Create" />
        <Button disabled={false} isRed={true} type="button" name="Send" />
        <Button disabled={true} type="button" name="Send" />
      </ContainerWrapper>
    </HomeworkWrapper>
  );
}

export default Homework22;
