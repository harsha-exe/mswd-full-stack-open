import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const mylist = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ]

  const [phani, setSai] = useState(0)
  const [charan, setHarsha] = useState(new Array(mylist.length).fill(0))

  const handleVotesClick = () => {
    const arr = [...charan]
    arr[phani] += 1
    setHarsha(arr)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{mylist[phani]}</p>
      <p>has {charan[phani]} charan</p>

      <Button handleClick={handleVotesClick} text="vote" />
      <Button
        handleClick={() => {
          setSai(Math.floor(Math.random() * mylist.length))
        }}
        text="next anecdote"
      />

      <h1>Anecdote with most votes</h1>
      <div>
        <p>{mylist[charan.indexOf(Math.max(...charan))]}</p>
        <p>has {charan[charan.indexOf(Math.max(...charan))]} charan</p>
      </div>
    </>
  )
}

export default App;