import { HomeworkWrapper, ContainerWrapper } from "./styles";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

function Homework22() {
  return (
    <HomeworkWrapper>
      <ContainerWrapper>
        <Input
          disabled={false}
          id="exampleId"
          name="exampleName"
          placeholder="Enter..."
          label="name"
          type="text"
        />
        <Input
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
