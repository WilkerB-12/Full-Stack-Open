import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));

  const handleClick = () => {
    const randomPosition = Math.floor(Math.random() * 6);
    setSelected(randomPosition);
  };

  const handleVotes = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  };

  const DisplayAnecdotes = () => {
    return (
      <div>
        <h1>Anecdote of the day</h1>
        <p>{props.anecdotes[selected]}</p>
        <p>has {votes[selected]} votes</p>
      </div>
    );
  };

  const DisplayMostVoted = () => {
    const maxVotes = Math.max(...votes);
    const mostVoted = votes.findIndex((element) => element === maxVotes);
    return (
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{props.anecdotes[mostVoted]}</p>
        <p>has {maxVotes} votes</p>
      </div>
    );
  };

  return (
    <div>
      <DisplayAnecdotes />
      <div>
        <Button text="vote" onClick={handleVotes} />
        <Button text="Next anecdote" onClick={handleClick} />
      </div>
      <DisplayMostVoted />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App anecdotes={anecdotes} />);
