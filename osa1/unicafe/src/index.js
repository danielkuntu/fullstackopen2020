import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const StatisticLine = (props) =>{

  // console.log("StatisticLine ", props)
  // Renderöi propseina saadut tilastonimikkeet ja arvot

    return (
        <div>
          {props.text} {props.value}
        </div>
    )
}

const Statistics = (props) => {
  
  // console.log("Statistics: ", props.good)
  // jos palautteiden summa == 0 -> ei palautteita -> renderöi tekstin. Muussa tapauksessa renderöi tilastot.
  if(props.good + props.neutral + props.bad === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
    } else {
      return (
        
        // HTML-taulukko tilastoja varten
        <div>
        <table>
          <tbody>
            <tr>
              <td><StatisticLine text="Good: " /></td>
              <td><StatisticLine value={props.good} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="Neutral: " /></td>
              <td><StatisticLine value={props.neutral} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="Bad: " /></td>
              <td><StatisticLine value={props.bad} /></td>
            </tr>
            <tr>
              <td> <StatisticLine text="Total: " /></td>
              <td><StatisticLine value={props.total} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="Average: " /></td>
              <td><StatisticLine value={props.average} /></td>
            </tr>
            <tr>
              <td><StatisticLine text="Positive: " /></td>
              <td><StatisticLine value={props.positive} /></td>
            </tr>
          </tbody>
        </table>  
        </div>
      )
    }
}

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)


const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good + (neutral * 0) + (bad * -1)) / total
  const positive = good / total * 100

  const setGoodFeedback = () => {
    setGood(good + 1)
  } 
  const setNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }
  const setBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGoodFeedback()} text="Good"/>
      <Button onClick={() => setNeutralFeedback()} text="Neutral"/>
      <Button onClick={() => setBadFeedback()} text="Bad"/>
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
