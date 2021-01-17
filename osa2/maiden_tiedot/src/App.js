import React, {useState, useEffect} from 'react'
import axios from 'axios'

import ShownCountries from "./Components/ShownCountries.js"
import SearchForm from "./Components/SearchForm.js"

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(() => {
    console.log('effect');
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  /*
    http://api.weatherstack.com/current
   ? access_key = YOUR_ACCESS_KEY
   & query = New York
  */


  useEffect(() => {
    console.log('effect');
    axios
      .get('http://api.weatherstack.com/current?access_key=cc55cb3f9752ced0a1e969810319bbb5&query=New%20York')
      .then(response => {
        console.log('weather promise fulfilled')
        setWeather(response.data.current.temperature)
      })
  }, [])

    console.log('weather state: ', weather);


  console.log('render', countries.length, 'countries')

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  const handleClick = (event) => {
    console.log(event)
    setSearch(event);

  }

  return (
    <div>
      <SearchForm search={search} handleSearch={handleSearch} />
      <ShownCountries countries={countries} search={search} handleClick={handleClick} weather={weather}/>
    </div>
  )
}

export default App;


