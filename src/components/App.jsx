import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const incrementFeedback = e => {
    const target = e.currentTarget.textContent;
    switch (target) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);

  return (
    <>
      <SectionTitle title="Please leave feadback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={incrementFeedback}
        ></FeedbackOptions>
      </SectionTitle>
      {countTotalFeedback() ? (
        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        </SectionTitle>
      ) : (
        <Notification message="There is no feedback" />
      )}{' '}
    </>
  );
}
