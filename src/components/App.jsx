import React, { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Wrapper } from "./App.styled";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
// Додавання фідбеку по кліку
  handleAddStats = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
// Сума всіх фідбеків
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
// Відсоток позитивних фідбеків
  calculatePositivePercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.calculatePositivePercentage();

    return (
      <Wrapper>
        <GlobalStyle />
        <Section title="Please leave feedback">
          <FeedbackOptions handleAddStats={this.handleAddStats} options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback." />
          ) : (
            <Statistics
              feedbackScore={this.state}
              totalFeedback={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}