import { useState, useEffect } from "react";

import Button from "components/Button/Button";
import {
  Homework24Wrapper,
  JokeCard,
  JokeFact,
  JokeFactAnswer,
} from "./styles";

function Homework24() {
  const [jokeFact, setJokeFact] = useState<string>("");
  const [jokeFact2, setJokeFact2] = useState<string>("");

  // Создадим функцию, которая будет вызывать GET запрос для получения новых шуток
  const getJokeFact = async (isCalledForUpdate?: boolean) => {
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const result = await response.json();
      console.log(result);

      if (!response.ok) {
        // Если статус ответа не в пределах 200-299, считаем это ошибкой
        // и гененируем ее таким образом, чтобы отдать result блоку catch
        throw Object.assign(new Error("API Error"), {
          response: result,
        });
      } else {
        setJokeFact(result.setup);
        setJokeFact2(result.punchline);
        if (isCalledForUpdate) {
          alert("Вы получили новую шутку");
        }
      }
    } catch (error) {
      //Тут обрабатываются ошибки
      console.log(error);
      if (isCalledForUpdate) {
        alert("Ошибка при получении данных");
      }
    }
  };

  useEffect(() => {
    getJokeFact();
  }, []);

  return (
    <Homework24Wrapper>
      <JokeCard>
        <Button name="New joke" onClick={() => getJokeFact(true)} />
        <div>
          <JokeFact>{jokeFact}</JokeFact>
          <JokeFactAnswer>{jokeFact2}</JokeFactAnswer>
        </div>
      </JokeCard>
    </Homework24Wrapper>
  );
}

export default Homework24;
