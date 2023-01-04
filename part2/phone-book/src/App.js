import React, { useState } from "react";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleNewName = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    console.log(e.target.value);
    setNewNumber(e.target.value);
  };

  const handleFilterName = (e) => {
    console.log(e.target.value);
    setFilterName(e.target.value);
  };

  const personsToShow =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            ? person
            : ""
        );

  const addName = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter show with{" "}
        <input value={filterName} onChange={handleFilterName} />
      </div>
      <h2>add new person</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, i) => (
          <Person key={i} person={person}></Person>
        ))}
      </ul>
    </div>
  );
};

export default App;
