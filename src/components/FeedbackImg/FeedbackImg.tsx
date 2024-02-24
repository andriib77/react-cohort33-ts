import { Like } from "../../assets";
import { Dislike } from "../../assets/dislike";

import Button from "../Button/Button";

import "./styles.css";
import { FeedbackProps } from "./types";

function FeedbackImg({
  like,
  dislike,
  onLike,
  onDislike,
  reset,
}: FeedbackProps) {
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
        {/* <Button name="👍" onClick={onLike} /> */}
        <div onClick={onLike} className="image-control">
          <img className="image" src={Like} alt="Like img" />
        </div>
      </div>
      <p className="count">{like}</p>
      <div className="button-control">
        {/* <Button name="👎" onClick={onDislike} /> */}
        <div onClick={onDislike} className="image-control">
          <img className="image" src={Dislike} alt="Dislike img" />
        </div>
      </div>
      <p className="count">{dislike}</p>
      <div className="button-reset">
        <Button name="Reset Results" onClick={reset} />
      </div>
    </div>
  );
}

export default FeedbackImg;
