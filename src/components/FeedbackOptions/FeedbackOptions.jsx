import { Button } from './FeedbackOptions.styled';
export const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <>
      <Button onClick={onLeaveGoodFeedback}>Good</Button>
      <Button onClick={onLeaveNeutralFeedback}>Neutral</Button>
      <Button onClick={onLeaveBadFeedback}>Bad</Button>
    </>
  );
};
