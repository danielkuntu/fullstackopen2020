import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {

  /**
   * Alkuperäisen tilan tallentaminen ja tilan muuttamiskonstruktorin luominen
   */
  let [selected, setSelected] = useState(0)
  let [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  /**
   * Tapahtumankäsittelijä uuden anekdootin hakemiselle
   */
  const randomAnecdote = () => {
    setSelected(selected = getRandomInt)
    console.log(votes)
    console.log(typeof votes)
  }
 
  /**
   * Tapahtumankäsittelijä anekdootin äänestämiselle
   */
  const vote = () => {
    console.log('anekdootin numero:', selected)
    console.log('indeksin tyyppi:', typeof selected)
    const newVote = {
      ...votes, [selected]: votes[selected] + 1
    }

    /**
     * setVotes -tilanmuutoskutsu päivittää tilan
     */
    setVotes(newVote)
    console.log('votes:', votes)  
  }



  /**
   * Äänestetyimmän anekdootin määrittäminen
   */

   //Object.values tekee taulukon votes-olion attribuuttien arvoista
  const äänet = Object.values(votes);
  const indexOfMax = äänet.indexOf(Math.max(...äänet));
  const valueOfMax = Math.max(...äänet);

  console.log('äänet :',äänet);
  console.log('indexof max ;', indexOfMax)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <div><p>{anecdotes[selected]}</p></div>
      <div><p>This anecdote has {votes[selected]} votes.</p></div>
      <button onClick = {randomAnecdote}>
        Random anecdote
      </button>
      <button onClick = {vote}>
        Vote
      </button>
      <h2>Anecdote with most votes</h2>
      <div><p>{anecdotes[indexOfMax]}</p></div>
      <div><p>This has {valueOfMax} votes.</p></div>
    </div>
  )
}

/**
 * Palauttaa satunnaisen luvun tapahtumankäsittelijälle
 * Vertailee edellistä satunnaista lukua uuteen, jos luku on sama => arpoo uuden
 */
function getRandomInt() {
  let min = 0
  let max = anecdotes.length
  let random

  do{
      random = Math.floor(Math.random() * (max - min)) + min;
  } while (random === getRandomInt.last)
  getRandomInt.last = random
  return random
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes} />,
  document.getElementById('root')
);

