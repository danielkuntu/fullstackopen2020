import React, { useState } from 'react';
import FilterForm from './FilterForm'
import ContactForm from './ContactForm'
import Contacts from './Contacts'

const App = () => {
  const [persons, setPersons] = useState([
    {name: 'Pertti Perttinen', number: '040-666', id: '1'},
    {name: 'Keijo Keijonen', number: '123213', id: '2'},
    {name: 'Jorma Kaaleppi', number: '123123122', id:"3"},
    {name: 'Hemmo Hemmonen', number: '123123123', id: "4"}
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  const addName = (event) => {
    event.preventDefault(); //estää sivun uudelleenrenderöitymisen
    console.log('button clicked', event.target);
    console.log('event:', event)
    const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
    }
    //jos indeksi on -1, niin nimi ei löydy vielä listasta
    if (persons.map(person => person.name).indexOf(personObject.name) === -1){
        console.log('tallentaa nimen listaan');
        setPersons(persons.concat(personObject));
    } else {
        window.alert(`${newName} is already in the Contacts`);
    }
    setNewName(''); //tyhjentää formin
    setNewNumber(''); 
    console.log('New contact added with an id of:', personObject.id);
  }

  const handleNameChange = (event) => {
      console.log(event.target.value);
      setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
      console.log(event.target.value);
      setNewNumber(event.target.value);
  }

  const handleSearch = (event) => {
      console.log(event.target.value);
      setSearch(event.target.value);
  }

  return(
    <div>
      <h2>Phonebook</h2>
        <FilterForm search={search} handleSearch={handleSearch} />
      <h2>Add a new contact</h2>
        <ContactForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Contacts</h2>
        <Contacts names={persons} keyWords={search}/>
    </div>
  )
}

export default App
