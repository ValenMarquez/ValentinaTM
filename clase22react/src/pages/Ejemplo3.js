import '../styles/estilos.css'

const Ejemplo3 = props => {
    return (
        <div>
            <h1>Ejemplo google maps</h1>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.163149104415!2d-58.
            42269828514902!3d-34.60003576480968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
            1!3m3!1m2!1s0x95bcca628c9422ff%3A0x22b51038d87e82da!2sAv.
            %20Medrano%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar
            !4v1668186411070!5m2!1ses!2sar" style={{width:1000, height:450, border:0}} ></iframe>
            </div>
        </div>
    )
}

export default Ejemplo3;