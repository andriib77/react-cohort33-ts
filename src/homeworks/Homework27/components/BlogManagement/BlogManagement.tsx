import Button from "components/Button/Button";
import Card from "homeworks/Homework27/components/Card/Card";
import { StyledBlogWraper, StyledButton, StyledTextarea } from "./styled";
import { ChangeEvent, createContext, useState } from "react";

export const MyTextareaContext = createContext({
  myBlogMessage: "",
});

function BlogManagement() {
  const [textareaMessage, setTextareaMessage] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleTextareaMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaMessage(event.target.value);
  };

  const handleSetMessage = () => {
    setMessage(textareaMessage);
    setIsDisplay(true);
  };

  return (
    <MyTextareaContext.Provider value={{ myBlogMessage: message }}>
      <StyledBlogWraper>
        <StyledTextarea
          id="textArea"
          name="textAreaId"
          onChange={handleTextareaMessage}
          value={textareaMessage}
        />
        <Button name="Запостить" onClick={handleSetMessage} />
        {isDisplay ? <Card /> : <></>}
      </StyledBlogWraper>
    </MyTextareaContext.Provider>
  );
}

export default BlogManagement;
