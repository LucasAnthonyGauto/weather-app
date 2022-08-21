import { useState } from "react";
import { convertTime } from "../utils/time-Zone";


export default function Weather() {
  const lat =-34.61315;
  const lon =-58.37723;
  const [icon, setIcon] = useState("");
  const [temp, setTemp] = useState(0);
  const [feels, setFeels] = useState(0);
  const [desc, setDesc] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [name,setName] = useState("");
  const [timeZone, setTimeZone] =useState(convertTime(new Date()));

  const key = '7931869ca227fbe4b9aca2ff4bb36cc0';
  let uri = `https://api.openweathermap.org/data/2.5/weather?lang=es&units=metric&lat=${lat}&lon=${lon}&appid=${key}`;
  
  useEffect(() => {
    fetch(uri)
    .then(res => res.json())
    .then(res => {
      setTimeout(() => {
        setTime(convertTime(new Date()))
      }, 10);
      const {main, weather} = res;
      const currentTemp = main.temp;
      const currentFeels = main.feels_like;
      const {description} = weather[0];
      const {humidity} = main;
      const {speed} =res.wind;
      const {name} = res;
      
      setIcon(`http://openweathermap.org/img/wn/${icon}@4x.png`);
      setTemp (currentTemp);
      setFeels (currentFeels);
      setDesc (description);
      setHumidity (humidity);
      setSpeed (speed);
      setName (name);
      setTimeZone (timeZone)

    });

  }, [])
  return (
    <div className="box">
        <h1 className="box-title">Tiempo Actual</h1>
        <ul className="box-small">
          {/* <li>{icon}</li> */}
          <li>{timeZone}</li>
          <li>{temp} °C</li>
          <li>{desc}</li>
          <li>Sensación térmica {feels} °C</li>
          <li>Velocidad del viento {speed}</li>
          <li>humedad {humidity}%</li>
          <li>{name}</li>
        </ul>
    </div>
  )
};

import { useEffect } from "react";