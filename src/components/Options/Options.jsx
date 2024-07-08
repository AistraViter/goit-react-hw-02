import styles from "./Options.module.css";

const Options = ({
  updateFeedbackGood,
  updateFeedbackNeutral,
  updateFeedbackBad,
  resetFeedback,
  totalFeedback,
}) => {
  const { options, isHidden, isShown } = styles;

  return (
    <div className={options}>
      <button onClick={updateFeedbackGood}>Good</button>
      <button onClick={updateFeedbackNeutral}>Neutral</button>
      <button onClick={updateFeedbackBad}>Bad</button>

      <button
        className={totalFeedback === 0 ? isHidden : isShown}
        onClick={resetFeedback}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
