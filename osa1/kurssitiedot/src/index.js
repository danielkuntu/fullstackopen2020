import React from 'react';
import ReactDOM from 'react-dom';

// Välittää tarpeelliset tiedot kullekin komponentille propsien avulla
const App = () => {
  // course-olion määrittely
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }  
  
  return (
    <div>
      <Header course={course.name} />
      <h3> Parts and exercises:</h3>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

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

ReactDOM.render(<App />, document.getElementById('root'))