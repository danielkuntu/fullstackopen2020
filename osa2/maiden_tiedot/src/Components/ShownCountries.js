import React, {useState} from 'react'

const ShownCountries = (props) => {
  const toFilter = props.countries;
  const keyWords = props.search;
  console.log('toFilter: ', toFilter);
  console.log('keyWords: ', keyWords);
  
  // Tallentaa muuttujaan hakusanaa vastaavia tuloksia
  const shown = toFilter.filter(country => country.name.toLowerCase().includes(keyWords.toLowerCase()));

  console.log('shown.length', shown.length);
  console.log('shown contents: ', shown)

  /**
   * Yli 10 tulosta
   */
  if(shown.length > 10){
    return(
      <p>Too many matches, specify another filter.</p>
    )

  /**
   * 2-10 tulosta
   */
  }else if (shown.length <= 10 && shown.length > 1){
    return(
      <div>
        <MultipleCountries shown={shown} handleClick={props.handleClick} /> 
      </div>
    )
  /**
    * 1 hakutulos
    */
  }else{
    return(
      <div>
        {showDetails(shown)}
      </div>
    )
  }
}

/**
 * Hakee yksittäisen maan yksityiskohtaiset tiedot
 */
function showDetails(shown) {
  console.log('showDetails: ', shown)
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

/**
 * Renderöi hakutuloksia ja show-buttoneita tapauksessa, jossa hakutuloksia 2-10
 * @param {*} props 
 * 
 * Välittää maatiedot propsin välityksellä buttonille
 */
const MultipleCountries = (props) => {
const row = props.shown.map(foundCountries => <p key={foundCountries.alpha3Code}>{foundCountries.name} {<ShowButton name={foundCountries.name} handleClick={props.handleClick}></ShowButton>} </p>);
  return(
    <div>
      {row}
    </div>
  )
}

/**
 * handleClick() välittää ko. valtion nimen App-tiedostossa sijaitsevaan search-statelle
 * @param {*} props 
 */
const ShowButton = (props) => {
  console.log('props name(Show):', props.name);
  return(
    <button onClick={() => props.handleClick(props.name)}>show</button>
  )
}


export default ShownCountries
