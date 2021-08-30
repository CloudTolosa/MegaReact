import React from 'react'
import PropTypes from 'prop-types'

const Contador = ({value}) => {
    return (
        <>
            <h1>Contador Componente</h1>
            <h2>{value}</h2>
        </>
    )
}

Contador.propTypes = {
  value : PropTypes.number
}

export default Contador
