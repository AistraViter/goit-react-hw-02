import styles from "./Feedback.module.css";

const Feedback = ({ good = 0, neutral = 0, bad = 0 }) => {
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
    </ul>
  );
};

export default Feedback;
