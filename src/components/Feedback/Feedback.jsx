import styles from "./Feedback.module.css";

const Feedback = ({ good = 0, neutral = 0, bad = 0, total, positive }) => {
  const { feedback } = styles;
  return (
    <ul className={feedback}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {total}</p>
      </li>
      <li>
        <p>Positive: {positive}%</p>
      </li>
    </ul>
  );
};

export default Feedback;
