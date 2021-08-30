import React from 'react'
import PropTypes from 'prop-types'

const Contador = ({value}) => {
    return (
        <>
            <h1>Contador Componente</h1>
            <h2>{value}</h2>
            <button onClick={(e) => {console.log(e)}}>+1</button>
            {/*Hay diferentes eventos sinteticos en react para mas
            informacion ir a https://es.reactjs.org/docs/events.html*/ }
        </>
    )
}

Contador.propTypes = {
  value : PropTypes.number
}

export default Contador
