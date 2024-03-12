import { FeedbackProps } from "./types";

import { Like } from "../../assets/index";

import Button from "../Button/Button";

import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonwithcountContainer,
  Count,
} from "./styles";

function Feedback({
  likes,
  dislikes,
  onLike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonwithcountContainer>
          <Button name="Like" onClick={onLike} />
          {/* <div onClick={onLike} className="image-control">
            <img className="image" src={Like} alt="Like img" />
          </div> */}
          <Count>{likes}</Count>
        </ButtonwithcountContainer>
        <ButtonwithcountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislikes}</Count>
        </ButtonwithcountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
