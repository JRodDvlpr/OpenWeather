import React from "react";
import '../components/weather.css';

 
const Weather = props => {
  return (
    <div className="container text-light w-card">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-3`} />
        </h5>
        
        {/* Get Celsius */}
        {props.temp ? (
          <h1 className="py-2">{props.temp}&deg;</h1>
        ) : null}
 
        {/* Weather description */}
        <h4 className="py-3">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};
 
export default Weather;