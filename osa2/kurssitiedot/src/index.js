import React from 'react';
import ReactDOM from 'react-dom';

// Välittää tarpeelliset tiedot kullekin komponentille propsien avulla
const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'kurssi of kalakukko',
        exercises: 69,
        id: 0
      }
    ]
  }



  const Course = (props) => {
      
    return(
      <div>
        <h1>{course.name}</h1>
          {course.parts.map(names => 
            <p key={names.id}>
              {names.name} {names.exercises}
            </p>)}     
      </div>
    )
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}


/*
// Kurssin nimen renderöinti
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

// Osat ja tehtävämäärät, välitetään Part-komponentille renderöitäväksi
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

// Tehtävien yhteismäärä
const Total = (props) => {
  return (
    <div>
      <p>Total number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}
*/
ReactDOM.render(<App />, document.getElementById('root'))