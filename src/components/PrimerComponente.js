import React from 'react';
import PropTypes from 'prop-types';

const PrimerComponente = ({saludo}) => {

    return (

        <>
            <h1>{saludo}</h1>
            <p> Mi primera App</p>
        </>
    )
}

PrimerComponente.propTypes = {
    saludo : PropTypes.isRequired
}

export default PrimerComponente
