import React from 'react';

const Description = ({temp, condition}) => {

    return(
        <section>
        <h4>{temp}</h4>
        <h4>{condition}</h4>
        </section>
    )
}

export default Description;