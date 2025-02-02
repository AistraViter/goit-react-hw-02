import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  const { options, isHidden } = styles;

  return (
    <div className={options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>

      <button
        className={totalFeedback === 0 ? isHidden : ""}
        onClick={resetFeedback}
      >
        Reset
      </button>
    </div>
  );
};

export default Options;
