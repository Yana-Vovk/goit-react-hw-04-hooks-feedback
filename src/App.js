import './App.css';
import React, { useState, useEffect } from 'react';
import useFeedback from './hooks/useFeedback';
import Feedback from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Cover from './components/Cover/Cover';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const onLeaveFeedback = useFeedback();
  const options = ['good','neutral','bad'];

  //  const onLeaveFeedback = (e) => {
  //   const grade = e.target.name;
  //   setGood((currentValue) => ({
  //     [grade]: currentValue[grade] + 1,
  //   }))
  // };

  useEffect(() => { setTotal(state => state + 1);},[good,neutral,bad])

  // const countTotalFeedback = () => {
  //   return Object.values(state).reduce((acc, value) => (acc += value), 0);
  // };
  

  
  // countPositiveFeedbackPercentage = (good, total) => {
  //   return Math.round((good * 100)/total);
  // }

    // const positivePercentage = this.countPositiveFeedbackPercentage(this.state.good, total);
  
  return (
    <div>
      <Cover
        title="Please leave feedback">
        <Feedback
          options={options}
          onLeaveFeedback={onLeaveFeedback} />
      </Cover>
      {/* <Cover
        title="Statistics">
        {total > 0
          ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} />)
          : (<Notification message="No feedback given" />)
        }
      </Cover> */}
    </div>
  );
}


 

  

 
