import { useState } from "react";

const Ejemplo1Estado = props => {

    const [activo, setActivo] = useState(true);

    const toggleActivo = e => {
        setActivo(!activo); //negacion ! booleano > setea el activo al contrario de lo que esta Activo
    }
    return (
        <div>
            <input type="text" placeholder="clickear boton" disabled={!activo} />
            <button onClick={toggleActivo}> {activo ? 'Desabilitar' : 'Activar'} </button>
        </div>
    )
}

/*ejemplo2*/
function Ejemplo2Estado(props) {
    const [counter,setCounter] = useState(0);

    return (
        <div className="container">
            <div className="counter">
              <h3>{`Contador: ${counter}`}</h3>
           </div>

           <div className="buttonGruop">
           <button className="success" onClick={() => setCounter(counter+1)}>+</button>
           <button className="error" onClick={() => setCounter(counter-1)}>-</button>
           </div>
        </div>
    )
}

export {
    Ejemplo1Estado,
    Ejemplo2Estado
}
