const Newsletter = () => {
    return (
        <section id="landing-page-newsletter">
            <h2>Recibe noticias y consejos</h2>
            <p>¡Suscríbete a nuestro newsletter para recibir contenido creativo y consejos de productividad y organización!</p>
            <form>
                <input className="newsletter-input" type="text" placeholder="Introduzca su dirección de correo electrónico"/>
                <input className="newsletter-submit" type="submit" value="Suscribirme" />
            </form>
        </section>
    )
}

export default Newsletter;