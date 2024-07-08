import styles from "./Options.module.css";

const Options = ({
  updateFeedbackGood,
  updateFeedbackNeutral,
  updateFeedbackBad,
}) => {
  const { options } = styles;

  return (
    <div className={options}>
      <button onClick={updateFeedbackGood}>Good</button>
      <button onClick={updateFeedbackNeutral}>Neutral</button>
      <button onClick={updateFeedbackBad}>Bad</button>
    </div>
  );
};

export default Options;
