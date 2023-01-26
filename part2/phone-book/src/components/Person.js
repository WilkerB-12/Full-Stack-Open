import noteService from "../services/persons";

const Person = ({ persons, filterName, getPeople }) => {
  const personsToShow =
    filterName === ""
      ? persons
      : persons.filter((person) =>
          person.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
            ? person
            : ""
        );

  const handleClick = async (id) => {
    await noteService.deleteP(id).then();
    getPeople()
  };

  return (
    <ul>
      {personsToShow.map((person, i) => (
        <div key={person.id}>
          <li>
            {person.name + " " + person.number}
            <button onClick={(e)=> {if(window.confirm(`Are you sure to delete ${person.name}?`)){
               handleClick(person.id);
            }}}>delete</button>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default Person;
