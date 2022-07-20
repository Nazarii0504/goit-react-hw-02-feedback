import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
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
PropTypes.FeedbackOptions = {
  onLeaveGoodFeedback: PropTypes.func.isRequired,
  onLeaveNeutralFeedback: PropTypes.func.isRequired,
  onLeaveBadFeedback: PropTypes.func.isRequired,
};
