import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

const API_Key = '0ff895f1354b494c95ab7dfadda2a141';

function App() {

  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=4159050&units=imperial&appid=${API_Key}`)
      .then(arr => {
        console.log(arr);
        setWeather(arr.data);
      })
      .catch(err => console.log(`There error is: ${err}`));
    },[]);  

  return (
    <div className="App">

      
   
    </div>
  );
}

export default App;

