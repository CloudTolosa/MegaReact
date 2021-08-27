import React from 'react';
import PropTypes from 'prop-types';

const PrimerComponente = ({saludo, subtitulo}) => {

    return (

        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

PrimerComponente.propTypes = {
    saludo : PropTypes.isRequired
}

PrimerComponente.defaultProps = {
    subtitulo : " "
}

export default PrimerComponente
