import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Contador = ({value}) => {

    //Un hook es una funcion, son faciles de reconocer porque suelen empezar por use
    const [state, setstate] = useState(initialState)

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
