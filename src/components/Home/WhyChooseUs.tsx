import recommendation1 from '../../assets/landing-page/recommendation_1.png';
import recommendation2 from '../../assets/landing-page/recommendation_2.png';
import recommendation3 from '../../assets/landing-page/recommendation_3.png';

const WhyChooseUs = () => {
    return (
        <div className="landing-page-whyChooseUs">
            <div className="whyChooseUs-titles">
                <h2>¿Por qué elegir Sunny Thoughts?</h2>
                <p>Opiniones de nuestros usuarios</p>
            </div>
            <p className="whyChooseUs-quotation-marks opening">“</p>
            <div className="whyChooseUs-cards">
                <div className="whyChooseUs-card">
                    <div className="whyChooseUs-card-user">
                        <img src={recommendation1} alt="" />
                        <p className="whyChooseUs-card-name">Valentina</p>
                    </div>
                    <p className="whyChooseUs-card-recommendation">Esta página de tomar notas es genial. Me encanta lo fácil que es organizar mis ideas y tareas. Además, la interfaz es muy intuitiva. Definitivamente la recomendaría a mis amigos.</p>
                    <p className="whyChooseUs-card-score">★★★★★</p>
                </div>
                <div className="whyChooseUs-card">
                    <div className="whyChooseUs-card-user">
                        <img src={recommendation2} alt="" />
                        <p className="whyChooseUs-card-name">Valentina</p>
                    </div>
                    <p className="whyChooseUs-card-recommendation">Increíble herramienta para tomar notas. Me ayuda a mantenerme organizado y productivo. La posibilidad de crear diferentes carpetas es muy útil. No puedo imaginar mi vida sin esta página.</p>
                    <p className="whyChooseUs-card-score">★★★★★</p>
                </div>
                <div className="whyChooseUs-card">
                    <div className="whyChooseUs-card-user">
                        <img src={recommendation3} alt="" />
                        <p className="whyChooseUs-card-name">Valentina</p>    
                    </div>
                    <p className="whyChooseUs-card-recommendation">Es exactamente lo que necesitaba. Me encanta cómo puedo organizar fácilmente mis ideas y tareas. Es muy intuitiva de usar y me ayuda a mantenerme organizado. ¡Altamente recomendada!</p>
                    <p className="whyChooseUs-card-score">★★★★★</p>
                </div>
                <div className="whyChooseUs-card">
                    <div className="whyChooseUs-card-user">
                        <img src={recommendation3} alt="" />
                        <p className="whyChooseUs-card-name">Valentina</p>    
                    </div>
                    <p className="whyChooseUs-card-recommendation">Es exactamente lo que necesitaba. Me encanta cómo puedo organizar fácilmente mis ideas y tareas. Es muy intuitiva de usar y me ayuda a mantenerme organizado. ¡Altamente recomendada!</p>
                    <p className="whyChooseUs-card-score">★★★★★</p>
                </div>
            </div>
            <p className="whyChooseUs-quotation-marks closing">”</p>
        </div>
    )
}

export default WhyChooseUs;