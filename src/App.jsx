import { useState } from 'react'
//https://api.weatherapi.com/v1/current.json?key=c3651a3d96984ebb8ba145919252912&q=London
import './App.css'

function App() {
    const [weather,setWeather]=useState({});
    const[city,setCity]=useState("");
    let URL="https://api.weatherapi.com/v1/current.json?key=c3651a3d96984ebb8ba145919252912&q="
    const fetchWeather=async(city)=>{
      try {
        let upURL = URL + city;
        const response=await fetch(upURL);
        const data=await response.json();
        setWeather(data);
      } catch (error) {
      console.error("Error fetching joke:", error);
      }
    };
  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <button onClick={() => fetchWeather(city)}>Get</button>
      {weather && weather.current && (
        <div>
          <h2>
            {weather.location.name}, {weather.location.country}
          </h2>
          <h3>Temperature: {weather.current.temp_c}°C</h3>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </div>
      )}
    </div>
  );
}

export default App
