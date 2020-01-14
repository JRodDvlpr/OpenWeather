import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import HeaderCard from './components/Header';
import WeatherCard from './components/WeatherCard';

//const API_Key = '0ff895f1354b494c95ab7dfadda2a141';

function App() {
  const [location, setLocation] = useState([]);
  
  const [weather, setWeather] = useState({
    temp: '',
    city: '',
    condition: '',
    description: '',
    country: ''
  })

  
  useEffect((e) => {

    // const city = e.target.city.value;

    axios.get(`http://api.openweathermap.org/data/2.5/weather?${location},&appid=0ff895f1354b494c95ab7dfadda2a141`)
      .then(res => {
        console.log(res.data);
        setWeather({
          temp: res.main.temp,
          city: res.name,
          condition: res.weather[0].main,
          country: res.sys.country
        })
      })
      .catch(err => console.log(`There error is: ${err}`));
    },[]);  

    const handleSearch = event => {
      setWeather(event.target.elements.country.value);
     }
    

  return (
    <section className="App">
      <form>
    <HeaderCard />
    {/* <InputForm value={location} onChange={(e) => setWeather(e.target.value)} /> */}
    <input name="city" onChange={(e) => setLocation(e.target.value)}
        />
    <button  onClick={event => handleSearch(event)} type='submit'>Get Weather</button>
    <h2>City:</h2>
    <WeatherCard temp={weather.temp} condition={weather.condition} city={weather.city} country={weather.country} />
    </form>

    </section>
   
  );
}

export default App;

