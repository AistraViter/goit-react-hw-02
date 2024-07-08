import styles from "./Notification.module.css";

const { notification } = styles;

export default function Notification() {
  return (
    <div className={notification}>
      <p>
        No feedback yet
      </p>
    </div>
  );
}
