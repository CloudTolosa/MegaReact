import React from 'react'

const PrimerComponente = (props) => {

    let saludo = 'Mega Desarrolladores';

    console.log(props);

    return (
        <>
            <h1>{saludo}</h1>
            <p> Mi primera App</p>
        </>
    )
}

export default PrimerComponente
