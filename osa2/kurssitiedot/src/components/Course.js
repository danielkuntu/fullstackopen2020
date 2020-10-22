import React from 'react'

/**
 * Koostaa yhteen kurssiin liittyvät komponentit yhteen 
 */
const Course = ({course}) => {

    return(
      <div>
        <Header course={course.name}/>
        <Content course={course.parts}/> 
        <Total course={course.parts}/>
      </div>
    )
  }

  /**
   * Kurssin nimi
   */
  const Header = ({course}) => {
    return(
      <h2>{course}</h2>
    )
  }

  /**
   * Kurssien osat
   * Mappaa course-JSX:stä kurssien osien nimet ja tehtävien lukumäärän
   */
  const Content = ({course}) => {
    let kontsa = course
    let osat = kontsa.map(osat => <ul key={osat.id}>{osat.name} {osat.exercises}</ul>)
    return(
      <div>
        {osat} 
      </div> 
    )
  }

  /**
   * Laskee kurssien tehtävien lukumäärät yhteen
   */
  const Total = ({course}) => {
    let numbers = course.map(course => course.exercises)
    let total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return(
      <div>
        <b>
        Total of exercises: {total}
        </b>
      </div>
    )
  }

  /**
   * Part-komponentti jätetty pois, koska Content hoitaa saman asian
   */
  /*
  const Part = ({course}) => {
    let parts = course.map(parts => parts.exercises)
    return(
      <p>{parts}</p>
    )
  }
  */
  export default Course