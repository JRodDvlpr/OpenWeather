// User Input Form

import React from "react";

const cardForm = () => {

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter City" onInput = {handleChange} />
                <button type="submit">Get Weather</button>
                <h2>City: {city}</h2>
            </form>
        </div>

    )
;}

export default cardForm;