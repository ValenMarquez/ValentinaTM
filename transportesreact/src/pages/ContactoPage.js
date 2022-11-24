import '../styles/main.css';

const ContactoPage = (props) => {
    return (
    
        <main className="holder contacto">
        <section>
            <h2>Contacto Rápido</h2>
            <form action="" class="formulario">
                <p>
                    <label htmlFor="">Nombre</label>
                    <input type="text"/>
                </p>
                <p>
                    <label htmlFor="">Email</label>
                    <input type="text"/>
                </p>
               
                <p>
                    <label htmlFor="">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label htmlFor="">Mensaje</label>
                    <textarea></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </section>
        <section className="datos">
            <h2>Otras vias de comunicación</h2>
            <p>Tambien podes contactarte con nosotros usuando los siguientes medios</p>
            <ul>
                <li><a href="https://www.instagram.com/">Instagram</a></li>
                <li><a href="https://twitter.com/">Twitter</a></li>
                <li><a href="https://www.facebook.com/">Facebook</a></li>
                <li><a href="https://mail.google.com/">Gmail</a></li>
            </ul>
        </section>
    </main>
    )
}

export default ContactoPage;