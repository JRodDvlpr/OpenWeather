import React from 'react';
import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import Form from './components/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import "./weather-icons/css/weather-icons.css";

const API_Key = '0ff895f1354b494c95ab7dfadda2a141';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      ferenheit: undefined,
      description: "",
      error: false
    };
 
  //  weather icons depending on the weather
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }
  
  //check weather and specify that icon to the state
  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }

  // calculate celsius
  // calCelsius(temp) {
  //   let cell = Math.floor(temp - 273.15);
  //   return cell;
  // }

  // event handler for submit button in form component
  getWeather = async e => {
    e.preventDefault();

    // get values from city and country - User input will select the city name
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(country && city) {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${API_Key}`);

    const response = await api_call.json();

    this.setState({
      city: `${response.name}, ${response.sys.country}`,
      country: response.sys.country,
      main: response.weather[0].main,
      temp: response.main.temp,
      description: response.weather[0].description,
      error: false
    });

    // // seting icons
    this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
 
    console.log(response);
  } else {
    this.setState({
      error: true
    });
  }
};

   
render() {
  return (
    <div className="App">
      <Header />
      <Form loadweather={this.getWeather} error={this.state.error} />
      <WeatherCard
        cityname={this.state.city}
        weatherIcon={this.state.icon}
        temp={this.state.temp}
        description={this.state.description}
      />
    </div>
  );
}
}

export default App;

