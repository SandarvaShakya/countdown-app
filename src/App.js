import { useEffect, useState } from "react";
import Clock from "./components/Clock";

import './App.css'

const App = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [checkTimer, setCheckTimer] = useState(true);

  let interval
  //Final Time
  const finalTime = "Feb 28, 2023 22:18:20" //Set your time here in the same format
   //Text After Countdown
  const finalText = "Hurrah!!!" //Set your text here

  const countDown = () => {
    const countDownDate = new Date(finalTime).getTime()
    
    interval = setInterval(() => {
      const currentDate = new Date().getTime()
      const timeDifference = countDownDate - currentDate

      const days = Math.floor(timeDifference / (24*60*60*1000))
      const hours = Math.floor((timeDifference % (24*60*60*1000)) / (1000*60*60))
      const minutes = Math.floor((timeDifference % (60*60*1000)) / (1000*60))
      const seconds = Math.floor((timeDifference % (60*1000)) / (1000))

      if(timeDifference < 0){
        clearInterval(interval)
        setCheckTimer(false)
      }else{
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => countDown())

  return (
    <div className="wrapper">
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
  )
}

export default App;