const Person = ({ persons,filterName }) => { 
  const personsToShow =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            ? person
            : ""
        );
    return (
      <ul>
      {personsToShow.map((person, i) => (
          <li key={i}>{person.name+' '+person.number}</li>
      ))}
    </ul>
    )
  }
  
  export default Person