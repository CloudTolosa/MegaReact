import React from 'react'

const PrimerComponente = ({saludo = "Hola Beto"}) => {

    return (

        <>
            <h1>{saludo}</h1>
            <p> Mi primera App</p>
        </>
    )
}

export default PrimerComponente
