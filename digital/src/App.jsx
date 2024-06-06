import { useEffect, useState } from 'react'
import "../src/App.css"


function App() {
  const [currenttime, setCurrenttime] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(()=>{setCurrenttime(new Date());},1000);
    return()=>clearInterval(timer)

  },[])
  const formattimingleadingzero =(number)=>{
    return number<10 ? `0${number}`: number;
  }

  const formathour =(hour)=>{return hour===0 ? 12 : hour>12 ? hour-12:hour}

  const formatdate=(date)=>{
    const options = { weekday:"long",year:"numeric", month:"long",day :"numeric"};
    return date.toLocaleDateString(undefined,options);
  }

  return (
   <>
   <div className="digital-clock">
    <h1>Digital Clock</h1>
    <div className="time">{formattimingleadingzero(formathour(currenttime.getHours()))} : {formattimingleadingzero(currenttime.getMinutes())}:{formattimingleadingzero(currenttime.getSeconds())}  {formathour(currenttime.getHours())>= 12? "PM":"AM"}</div>
    <div className="date">{formatdate(currenttime)}</div>
    </div></>
  )
}

export default App
