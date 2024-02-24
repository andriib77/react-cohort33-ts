import { FeedbackProps } from "./types";

import Button from "../Button/Button";

import "./styles.css";

function Feedback({ like, dislike, onLike, onDislike, reset }: FeedbackProps) {
  // const [like, setLike] = useState(0);
  // const [dislike, setDisLike] = useState(0);

  // const onLike = () => {
  //   setLike((prevValue) => prevValue + 1);
  // };

  // const onDislike = () => {
  //   setDisLike((prevValue) => prevValue + 1);
  // };

  // const reset = () => {
  //   setLike(0);
  //   setDisLike(0);
  // };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="👍" onClick={onLike} />
      </div>
      <p className="count">{like}</p>
      <div className="button-control">
        <Button name="👎" onClick={onDislike} />
      </div>
      <p className="count">{dislike}</p>
      <div className="button-reset">
        <Button name="Reset Results" onClick={reset} />
      </div>
    </div>
  );
}

export default Feedback;
