const Ejemplo1Props = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}
const Ejemplo2Props = props => {
    const {elementos} = props;

    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}> {elemento} </li>)}
        </ul>
    )
}


const Ejemplo3Props = ({ titulo, subtitulo, cuerpo }) => {
    return(
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{cuerpo}</p>
        </div>
    )
}

const Ejemplo4Props = props => {
    return(
        // cuando ejecutamos el evento onChange
        //el input va a tomar lo que sucede en la funcion cambiarValor
        //entonces recibimos la propiedad de cambiarValor
        <label>ver en consola: <input type="Text" onChange={(e)=>
            props.cambiarValor(e.target.value) } />
        </label>
    )
}

const Ejemplo5Props = props => {

    const handleClick = e => {
        if (props.eventiClick) {
            props.eventiClick('Me clicleaste');
        }
    }

    return (
        <p>
            <button onClick={handleClick}>Clickeame</button>
        </p>
    )
}


export {
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props,
    Ejemplo4Props,
    Ejemplo5Props
};