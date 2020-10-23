import React, { useState } from 'react';


const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas'}
  ])
  const [newName, setNewName] = useState('a new name')

  const addName = (event) => {
    //estää sivun uudelleenrenderöitymisen
    event.preventDefault();
    console.log('button clicked', event.target);
    console.log('event:', event)
    const noteObject = {
        name: newName,
        date: new Date().toISOString(),
        important: Math.random() > 0.5,
        id: persons.length + 1,
    }
    setPersons(persons.concat(noteObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
      console.log(event.target.value);
      setNewName(event.target.value);
  }


  return(
    <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit = {addName}>
            <input 
            value={newName}
            onChange={handleNameChange} 
            />
          <button type="submit">add</button>
          </form>
        </div>
      <h2>Numbers</h2>
      <ul>
          {persons.map(person =>
            <p key={person.name}>
            {person.name}
            </p>)}
      </ul>
    </div>
  )
}

export default App