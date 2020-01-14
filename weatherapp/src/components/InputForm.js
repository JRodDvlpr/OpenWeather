// User Input Form

import React, { useEffect } from 'react';

const cardForm = ({ weather, setWeather}) => {

    const handleSearch = event => {
        event.preventDefault();
       
    }
    

    return (
        <div>
            <form>
                <label>Enter City:</label>
                <input id='city' type='text' placeholder='Enter City'  />

                <input id='country' type='text' placeholder='Enter Country' />
                <button  onClick={event => handleSearch(event)} type='submit'>Get Weather</button>

                <h2>City:</h2>
            </form>
        </div>

    )
}

export default cardForm;