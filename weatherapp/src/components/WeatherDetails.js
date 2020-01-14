import React from 'react';
import Location from './Location.js';
import Description from './Description';

const WeatherDetails = ({temp, country, city, condition}) => {

    return (
        <>
        <Location city={city} country={country} />
        <Description temp={temp} condition={condition} />
        </>

    )
}

export default WeatherDetails;