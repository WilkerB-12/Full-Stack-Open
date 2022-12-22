import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewName = (e)=>{
    console.log(e.target.value)
    setNewName(e.target.value)
  }

  const addName=(e)=>{
    e.preventDefault();
    const personObject={
      name: newName,
      /*date: new Date().toISOString(),
      id: persons.length1*/
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map((person,i)=> <Person key={i} person={person}></Person>)}
        </ul>
        <p>git addEsto es una prueba</p>
    </div>
  )
}

export default App