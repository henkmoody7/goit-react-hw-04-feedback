import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionTitle } from './SectionTitle/SectionTitle';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  incrementFeedback = e => {
    const target = e.currentTarget.textContent;
    this.setState(prevState => ({
      [target]: prevState[target] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, value) => {
      return total + value;
    }, 0);
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <>
        <SectionTitle title="Please leave feadback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.incrementFeedback}
          ></FeedbackOptions>
        </SectionTitle>
        {this.countTotalFeedback() ? (
          <SectionTitle title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          </SectionTitle>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
