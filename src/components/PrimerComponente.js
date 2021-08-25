import React from 'react'

const PrimerComponente = () => {

    let saludo = 'Mega Desarrolladores';
    let numeros = 12345678;
    let decimales = 12345.625;
    let boolean = true; //Esta variable no se imprime por ser de tipo logico
    let arreglo = [1,2,3,4,5,6,7]; //concatena puedes mirar en tu navegador que los pone cada uno con su index
    const objeto = {
        nombre: 'desarrollador',
        edad: 25
    } // Para imprimir se puede hacer de dos formas json o con la etiqueta pre

    return (
        <>
            <h1>{saludo}</h1>
            <h1>{numeros}</h1>
            <h1>{decimales}</h1>
            <h1>{boolean}</h1>
            <h1>{arreglo}</h1>
            <h1>{JSON.stringify(objeto)}</h1>
            <pre>{JSON.stringify(objeto)}</pre>
            <pre>{JSON.stringify(objeto, null, 3)}</pre>{/*En este caso se utiliza para darle forma de codigo*/ }
            <p> Mi primera App</p>
        </>
    )
}

export default PrimerComponente
