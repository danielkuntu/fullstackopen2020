import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course'


const App = () => {
  const courses = [
    {
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  // Laittaa const courses -sisällön JSX-muodossa talteen, tämä välitetään muille komponenteille
  let curriculum = courses.map(course => <Course key={course.id} course={course}/>)
  console.log('curriculum: ', curriculum);

  return (
    <div>
      <h1>Web development curriculum</h1>
      {curriculum}    
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))