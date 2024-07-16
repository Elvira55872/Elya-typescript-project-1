import Button from "components/Button/Button";

import {
  FeedbackWrapper,
  FeedbackControl,
  ButtonWithCountContainer,
  Count,
} from "./styles";
import { FeedbackProps } from "./types";

function Feedback({
  like,
  dislike,
  onLike,
  onDislike,
  resetResults,
}: FeedbackProps) {
  return (
    <FeedbackWrapper>
      <FeedbackControl>
        <ButtonWithCountContainer>
          <Button name="Like" onClick={onLike} />
          <Count>{like}</Count>
        </ButtonWithCountContainer>
        <ButtonWithCountContainer>
          <Button name="Dislike" onClick={onDislike} />
          <Count>{dislike}</Count>
        </ButtonWithCountContainer>
      </FeedbackControl>
      <Button name="Reset Results" onClick={resetResults} />
    </FeedbackWrapper>
  );
}

export default Feedback;
