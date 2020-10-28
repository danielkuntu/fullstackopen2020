import React, {useState, useEffect} from 'react'
import axios from 'axios'

import ShownCountries from "./Components/ShownCountries.js"
import SearchForm from "./Components/SearchForm.js"

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    console.log('effect');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  console.log('render', countries.length, 'countries')
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div>
      <SearchForm search={search} handleSearch={handleSearch} />
      <ShownCountries countries={countries} search={search} />
    </div>
  )
}

export default App;
