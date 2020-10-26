import React, { useEffect, useState } from 'react';
import axios from 'axios'

import FilterForm from './FilterForm'
import ContactForm from './ContactForm'
import Contacts from './Contacts'


const App = () => {

  const [hookPersons, setHookPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

  /**
   * Hook Effect
   */
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')  // 1. hakee datan palvelimelta
      .then(response => { // 2. rekisteröi operaatiolle tapahtumankäsittelijän
        console.log('promise fulfilled')
        setHookPersons(response.data) //3. tallentaa saadun datan tilaan HookPersons
      })
  }, [])
  console.log('render', hookPersons.length, 'hookPersons');

  const addName = (event) => {
    event.preventDefault(); //estää sivun uudelleenrenderöitymisen
    console.log('button clicked', event.target);
    console.log('event:', event)
    const personObject = {
        name: newName,
        number: newNumber,
        id: hookPersons.length + 1,
    }
    //jos indeksi on -1, niin nimi ei löydy vielä listasta
    if (hookPersons.map(person => person.name).indexOf(personObject.name) === -1){
        console.log('tallentaa nimen listaan');
        setHookPersons(hookPersons.concat(personObject));
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
        <Contacts names={hookPersons} keyWords={search}/>
    </div>
  )
}

export default App
