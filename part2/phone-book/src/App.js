import React, { useState, useEffect } from "react";
import Person from "./components/Person";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import noteService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [notificationMessage,setNotificationMessage]=useState(null)

  const getPeople = () => {
    noteService.getAll().then((initialPersons) => setPersons(initialPersons));
    console.log("peticion de todas las personas lista");
  };

  useEffect(() => {
    console.log("effect");
    getPeople();
    console.log("promise fulfilled");
  }, []);

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

  const addName =async (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      const personToUpdate = persons.find((person) => person.name === newName);
      if (
        window.confirm(
          `${personToUpdate.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        await noteService
        .update(personToUpdate.id, personObject)
        .then(()=>{setNotificationMessage(`The number of ${personToUpdate.name} was updated successfully`);
        setTimeout(()=>{
          setNotificationMessage(null)
        },5000)});
        getPeople()
      }
    } else {
      noteService
        .create(personObject)
        .then((newPerson) => {
        console.log(newPerson);
        setPersons(persons.concat(newPerson))
        setNotificationMessage(`User ${newPerson.name} was added successfully`);
        setTimeout(()=>{
          setNotificationMessage(null)
        },5000)
      });
    }
    console.log("despues de promesa");
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage}/>
      <Filter filterName={filterName} handleFilterName={handleFilterName} />
      <h2>add new person</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        addName={addName}
        handleNewName={handleNewName}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
      <ul>
        <Person
          persons={persons}
          filterName={filterName}
          getPeople={getPeople}
        />
      </ul>
    </div>
  );
};

export default App;
