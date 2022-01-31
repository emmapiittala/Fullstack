import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'

const Header = () => {

  return(
    <div>
    <h1>Give feedback</h1>
  </div>
  )
}


const Statistics = (props) => {
  const average = (props.good - props.bad) / props.all
  const positive = (props.good / props.all) * 100

  if (props.all == 0) {
   return <p>No feedback given</p>
  }

  return(
    <div>
    <h1>statistics</h1>
    <StatisticLine text="good " value ={props.good} />
      <StatisticLine text="neutral " value ={props.neutral} />
      <StatisticLine text="bad " value ={props.bad} />
      <StatisticLine text="all " value ={props.all} />
      <StatisticLine text="average " value ={average} />
      <StatisticLine text="positive " value ={positive} />
      

  </div>
  )
}
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const StatisticLine = (props) => {
  return (
    <tr>
    <td>{props.text}</td> 
    <td>{props.value}</td>
  </tr>
  )
 
  }
const App = () => {
  const [clicks, setClicks] = useState({
    good : 0 , neutral : 0 , bad : 0 , all : 0, average : 0
  })
  

  const handleGoodClick = () =>
    setClicks({...clicks, good: clicks.good + 1 , all: clicks.all + 1})
  
    const handleNeutralClick = () =>
    setClicks({...clicks, neutral: clicks.neutral + 1, all: clicks.all + 1})

    const handleBadClick = () =>
    setClicks({...clicks, bad: clicks.bad + 1, all : clicks.all + 1})


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  
  

  return (
    <div>
      <Header/>
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Statistics good = {clicks.good} neutral = {clicks.neutral} bad = {clicks.bad} all = {clicks.all}/>

      

    </div>
  )
}

export default App
