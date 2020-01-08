// User Input Form

import React from "react";

const cardForm = () => {

    return (
        <div>
            <form>
                <input type="text" placeholder="Enter City"  />
                <button type="submit">Get Weather</button>
                <h2>City:</h2>
            </form>
        </div>

    )
;}

export default cardForm;