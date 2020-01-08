import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import HeaderCard from './components/Header';
// import WeatherCard from './components/WeatherCard';
import Form from './components/Form';


// const API_Key = '0ff895f1354b494c95ab7dfadda2a141';

function App() {
  const [location, setLocation] = useState([]);
  
  
  useEffect(() => {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=4159050&units=imperial&appid=0ff895f1354b494c95ab7dfadda2a141`)
      .then(arr => {
        console.log(arr.data);
        setLocation(arr.data);
      })
      .catch(err => console.log(`There error is: ${err}`));
    },[]);  

  return (
    <section className="App">
    <HeaderCard />
    <Form />


    </section>
   
  );
}

export default App;

