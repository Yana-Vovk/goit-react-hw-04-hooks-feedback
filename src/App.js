import './App.css';
import React, { useState, useEffect } from 'react';
import Feedback from './components/Feedback/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Cover from './components/Cover/Cover';
import Notification from './components/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(-1);

  const onLeaveFeedback = (e) => {
      if (e.target.name === 'good') {
        setGood(good => good + 1);
        }
        if (e.target.name === 'neutral') {
             setNeutral(neutral=> neutral +1);
         }
        if (e.target.name === 'bad') {
             setBad(bad=> bad +1);
         }
  }
  const options = ['good','neutral','bad'];

  useEffect(() => { setTotal(total => total + 1); }, [good, neutral, bad]); 
  
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100)/total);
  }

  return (
    <div>
      <Cover
        title="Please leave feedback">
        <Feedback
          options={options}
          onLeaveFeedback={onLeaveFeedback} />
      </Cover>
      <Cover
        title="Statistics">
        {total > 0
          ? (<Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()} />)
          : (<Notification message="No feedback given" />)
        }
      </Cover>
    </div>
  );
}


 

  

 
