export const FeedbackOptions = ({
  onLeaveGoodFeedback,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
}) => {
  return (
    <>
      <button onClick={onLeaveGoodFeedback}>Good</button>
      <button onClick={onLeaveNeutralFeedback}>Neutral</button>
      <button onClick={onLeaveBadFeedback}>Bad</button>
    </>
  );
};
