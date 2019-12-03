import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import HeaderCard from './components/Header';
// import WeatherCard from './components/WeatherCard';
import ReactWeather from 'react-open-weather';

const API_Key = '0ff895f1354b494c95ab7dfadda2a141';

function App() {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=4159050&units=imperial&appid=${API_Key}`)
      .then(arr => {
        console.log(arr);
        setApiData(arr.data);
      })
      .catch(err => console.log(`There error is: ${err}`));
    },[]);  

  return (
    <div className="App">

      <HeaderCard />
      <ReactWeather 
        weather={apiData.list}
        minTemp={apiData.list.main.temp_min}
        maxTemp={apiData.list.main.temp_max}
        detail={apiData.list.weather.description}

      />

    </div>
  );
}

export default App;

