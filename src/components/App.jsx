import { useState } from "react";
import Description from "./Description/Description";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbackGood = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      good: prevFeedback.good + 1,
    }));
  };

  const updateFeedbackNeutral = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      neutral: prevFeedback.neutral + 1,
    }));
  };

  const updateFeedbackBad = () => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      bad: prevFeedback.bad + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description />
      <Options
        updateFeedbackGood={updateFeedbackGood}
        updateFeedbackNeutral={updateFeedbackNeutral}
        updateFeedbackBad={updateFeedbackBad}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback} // Передаємо totalFeedback
      />
      <IsFeedback totalFeedback={totalFeedback} feedback={feedback} />
    </>
  );
}

const IsFeedback = ({ totalFeedback, feedback }) => {
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  if (totalFeedback > 0) {
    return (
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback}
      />
    );
  }
  return <Notification />;
};
