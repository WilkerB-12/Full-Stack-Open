import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const Text = ({ text }) => <h1>{text}</h1>;

  const handleGoodClick = () => setGood(good + 1);

  const handleNeutralClick = () => setNeutral(neutral + 1);

  const handleBadClick = () => setBad(bad + 1);

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>{text}</button>
  );

  const Display=({text,state})=><p>{text} {state}</p>

  const Total=({text})=><p>{text} {good+neutral+bad}</p>

  const Average=({text})=>good+neutral+bad===0?<p>{text} 0</p>:<p>{text} {(good-bad)/(good+neutral+bad)}</p>
  
  const Positive=({text})=>good+neutral+bad===0?<p>{text} 0</p>:<p>{text} {(good)/(good+neutral+bad)*100}%</p>

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
        <Text text="statics"/>
      </div>
        <Display text="good" state={good}/>
        <Display text="neutral" state={neutral}/>
        <Display text="bad" state={bad}/>
        <Total text="all"/>
        <Average text="average"/>
        <Positive text="positive"/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
