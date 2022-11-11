import alumnos from 'src/data/alumnos.json';

const Ejemplo4 = props => {
    return (
        <>
            <h1>hola soy la pagina Ejemplo 4 JsON</h1>
            <ul>
                {alumnos.map(alumno => (
                    <li>{alumno.nombre} {alumno.apellido} - edad: ({alumno.edad}) </li>
                )
                )}

            </ul>
        </>
    )
}

export default Ejemplo4;
