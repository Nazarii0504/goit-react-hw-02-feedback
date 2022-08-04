import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notofication/Notofication';
import { Container } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  giveFeedbackHandler = e => {
    const { name } = e.target;
    this.setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { bad, good, neutral } = this.state;
    return bad + good + neutral;
  };
  countPositiveFeedbackPercentage = () => {
    const { bad, good, neutral } = this.state;

    return Math.round(Number(good / (bad + good + neutral)) * 100);
  };

  render() {
    const { bad, good, neutral } = this.state;
    const options = Object.keys(this.state);

    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.giveFeedbackHandler}
            options={options}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
