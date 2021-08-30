import React from 'react'
import PropTypes from 'prop-types'

const Contador = ({value}) => {

    //handleAdd 
    const handleAdd = (e) => {
        console.log(e);
    }

    return (
        <>
            <h1>Contador Componente</h1>
            <h2>{value}</h2>
            <button onClick={handleAdd}>+1</button>
            {/*Hay diferentes eventos sinteticos en react para mas
            informacion ir a https://es.reactjs.org/docs/events.html*/ }
        </>
    )
}

Contador.propTypes = {
  value : PropTypes.number
}

export default Contador
