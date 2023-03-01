import { useState, useRef } from "react";
import Clock from "./components/Clock";

import './App.css'
import Button from "./components/Button";
import DateSelect from "./components/DateSelect";

const App = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  const [start, setStart] = useState(false);
  const [checkTimer, setCheckTimer] = useState(true);

  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [date, setDate] = useState(new Date().getDate() + 1)
  const [year, setYear] = useState(new Date().getFullYear())

  let intervalId = useRef(0)

  let interval
  //Final Time
  const finalTime = `${year}/${month}/${date} 12:00:00` //Set your time here in the same format
   //Text After Countdown
  const finalText = "Hurrah!!!" //Set your text here

  const countDown = () => {
    const countDownDate = new Date(finalTime).getTime()

    if(start === false){
      setStart(true)
      interval = setInterval(() => {
        const currentDate = new Date().getTime()
        const timeDifference = countDownDate - currentDate

        const days = Math.floor(timeDifference / (24*60*60*1000))
        const hours = Math.floor((timeDifference % (24*60*60*1000)) / (1000*60*60))
        const minutes = Math.floor((timeDifference % (60*60*1000)) / (1000*60))
        const seconds = Math.floor((timeDifference % (60*1000)) / (1000))

        if(timeDifference < 0){
          clearInterval(intervalId.current)
          setCheckTimer(false)
        }else{
          setTimerDays(days)
          setTimerHours(hours)
          setTimerMinutes(minutes)
          setTimerSeconds(seconds)
        }
        intervalId.current = interval
      })
    }
  }

  const reset = () => {
    if(timerDays !== 0 || timerHours !== 0 || timerMinutes !== 0 || timerSeconds !== 0){
      const confirmReset = window.confirm('Are you sure you want to reset the timer?')
      if(confirmReset){
        clearInterval(intervalId.current)
        setTimerDays(0)
        setTimerHours(0)
        setTimerMinutes(0)
        setTimerSeconds(0)
        setStart(false)
      }
    }
    return
  }

  return (
    <div className="wrapper">
      <h1>Countdown</h1>
      <div className="clock-container">
        {
          checkTimer ?
          <Clock
            days = {timerDays}
            hours = {timerHours}
            minutes = {timerMinutes}
            seconds = {timerSeconds}
          />
          : <div className="completed">{finalText}</div>
        }
      </div>
      <div className="buttons">
        <Button
          handleClick={countDown}
          text="Start"
          class='btn btn--start'
        />
        <Button
          handleClick={reset}
          text="Reset"
          class='btn btn--reset'
        />
      </div>
      <DateSelect 
        setDate={setDate}
        setMonth={setMonth}
        setYear={setYear}
      />
    </div>
  )
}

export default App;