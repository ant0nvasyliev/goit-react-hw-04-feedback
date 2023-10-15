import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Wrapper } from './App.styled';
import { Notification } from './Notification/Notification';

export const App = () => {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Сума всіх фідбеків
  const totalFeedback = good + neutral + bad;

  // Додавання фідбеку по кліку
  // const handleAddStats = (type) => {
  //   setFeedback((prevState) => ({
  //     ...prevState,
  //     [type]: prevState[type] + 1,
  //   }));
  // };
  const handleAddStats = option => {
    switch (option) {
      case 'good':
        setGood(preveState => preveState + 1);
        break;
      case 'neutral':
        setNeutral(preveState => preveState + 1);
        break;
      case 'bad':
        setBad(preveState => preveState + 1);
        break;
      default:
        break;
    }
  };
  // Розрахунок позитивного фідбеку у %
  const calculatePositivePercentage = () => {
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleAddStats={handleAddStats}
          options={Object.keys({ good, bad, neutral })}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback === 0 ? (
          <Notification message="There is no feedback." />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positivePercentage={calculatePositivePercentage()}
          />
        )}
      </Section>
    </Wrapper>
  );
};
