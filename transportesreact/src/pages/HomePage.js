import '../styles/main.css';

const HomePage = (props) => {
    return (
    
        <main className="holder">
        <div>
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div className="columnas">
            <section className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis recusandae assumenda ipsam nostrum
                    odit error quasi laborum dolores consequuntur, modi quia maiores, quod rem doloribus alias officiis
                    sit illo. Quidem?</p>

            </section>
            <section className="testimonios">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente excelente</span> 
                    <span className="autor">Juan Gomez - zapatos.com</span>
                </div>
            </section>
        </div>
    </main>
    )
}

export default HomePage;