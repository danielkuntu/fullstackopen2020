import React from 'react'

const ShownCountries = (props) => {
  const toFilter = props.countries
  const keyWords = props.search
  console.log('toFilter: ', toFilter);
  console.log('keyWords: ', keyWords);
  const shown = toFilter.filter(country => country.name.toLowerCase().includes(keyWords.toLowerCase()));

  console.log('shown.length', shown.length);

  if(shown.length > 10){
    return(
      <p>Too many matches, specify another filter.</p>
    )
  }else if (shown.length <= 10 && shown.length > 1){
    return(
      <div>
        {shown.map(foundCountries => <p key={foundCountries.alpha3Code}>{foundCountries.name}</p>)}
      </div>
    )
  }else{
    return(
      <div>
        {shown.map(foundCountries => <h1 key={foundCountries.alpha3Code}>{foundCountries.name}</h1>)}
        {shown.map(foundCountries => <p key={foundCountries.alpha3Code}>Capital: {foundCountries.capital}</p>)}
        {shown.map(foundCountries => <p key={foundCountries.alpha3Code}>Population: {foundCountries.population}</p>)}
        <h2>Languages</h2>
        {shown.map(foundCountries => <ul key={foundCountries.alpha3Code}>{foundCountries.languages.map(languages => <li>{languages.name}</li>)}</ul>)}
        {shown.map(foundCountries => <img src={foundCountries.flag} alt="flag" height="128"></img>)}
      </div>
    )
  }

}

export default ShownCountries
