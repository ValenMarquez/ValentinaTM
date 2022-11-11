import '../styles/estilos.css'

const Ejemplo3 = props => {
    return (
        <div>
            <h1>Hola soy LA PAGINA</h1>
            <div className="mapa">
                <iframe src="https://www.google.es/maps/place/Av.+Medrano+951,+C1179AAQ+CABA/@-34.5986174,-58.4222963,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca62d4cf1563:0x686de505d84c67e6!8m2!3d-34.5986174!4d-58.4201076"
                 style={{width:1000, height:450, border:0}} ></iframe>
            </div>
        </div>
    )
}

export default Ejemplo3;