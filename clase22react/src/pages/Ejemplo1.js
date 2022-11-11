import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props } from '../componentes/props/Props';

const nombre2 = 'Pablo'
const lista = ['manzanas', 'bananas', 'peras', 'frutillas'];

const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = props => {
    return (
        <div>
            <h1>Ejemplos de Propiedades</h1>

            {/*ejemplo de propiedad simple y la puedo reutilizar*/}
            <Ejemplo1Props nombre='Valentina' />
            <Ejemplo1Props nombre={nombre2} />
            <hr />
            {/*ejemplo de pasar lista de elementos*/}
            <Ejemplo2Props elementos={lista} />
            <hr />
            {/*ejemplo de multiples variables y destructuring */}
            <Ejemplo3Props titulo="La Noticia" subtitulo="Soy el subtitulo de la noticia"
                cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
             eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
             sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <hr />
            <Ejemplo4Props cambiarValor={mostrarValor} />
            <hr />
            <Ejemplo5Props eventoClick={mostrarValor} />
        </div>
    )
}





export default Ejemplo1;
