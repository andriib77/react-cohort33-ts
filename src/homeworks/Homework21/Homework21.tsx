import "./styles.css";
import { useState } from "react";

// import Feedback from "../../components/Feedback/Feedback";
import FeedbackImg from "../../components/FeedbackImg/FeedbackImg";

function Homework21() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);

  const onLike = () => {
    setLike((prevValue) => prevValue + 1);
  };

  const onDislike = () => {
    setDisLike((prevValue) => prevValue + 1);
  };

  const reset = () => {
    setLike(0);
    setDisLike(0);
  };
  return (
    <div className="homework21-wrapper">
      <FeedbackImg
        like={like}
        dislike={dislike}
        onLike={onLike}
        onDislike={onDislike}
        reset={reset}
      />
    </div>
  );
}

export default Homework21;
