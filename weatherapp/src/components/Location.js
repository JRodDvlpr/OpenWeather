import React from 'react';

const Location = ({city, country}) => {

    return(
        <section>
        <h3>{city}</h3>
        <h3>{country}</h3>
        </section>
    )
}

export default Location;