import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const Statistic = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad;

  const average = (props.good - props.bad) / total;

  const positive = (props.good / total) * 100;
 if(total !==0){ 
  return (
    <div>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="good" value={props.bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={average.toFixed(2)} />
      <Statistic text="positive" value={positive.toFixed(2) + " %"} />
    </div>
  );
}
else{ return( <p>No feedback given</p>)}

};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Text = ({ text }) => <h1>{text}</h1>;

  const handleGoodClick = () => setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);


  return (
    <div>
      <div>
        <Text text="give feedback" />
      </div>
      <div>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
      </div>
      <div>
        <Text text="statics" />
      </div>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
