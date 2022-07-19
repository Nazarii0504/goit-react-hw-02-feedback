export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div>Good:{good}</div>
      <span>Neutral:{neutral}</span>
      <span>Bad:{bad}</span>
      <span>Total:{total}</span>
      <span>Positive Feedback:{positivePercentage}%</span>
    </>
  );
};
