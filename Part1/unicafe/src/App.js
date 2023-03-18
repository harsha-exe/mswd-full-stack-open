import { useState } from 'react'

const Button = ({text, onClick}) => 
  <button onClick={onClick}>{text}</button>

const MyStline = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const MySts = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const positive = good / all * 100
  const average = (good - bad) / (good + bad + neutral)

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <MyStline text="good" value={good} />
          <MyStline text="neutral" value={neutral} />
          <MyStline text="bad" value={bad} />
          <MyStline text="all" value={good+neutral+bad} />
          <MyStline text="average" value={average} />
          <MyStline text="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text="good" onClick={() => setGood(good+1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Button text="bad" onClick={() => setBad(bad+1)} />

      <MySts good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App