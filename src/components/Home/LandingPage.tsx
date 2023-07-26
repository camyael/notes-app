import Carousel from './Carousel';

const LandingPage = () => {
    return (
        <section className="home-landing-page">
            <div className='landing-page-titles'>
                <h1 className='title-landing-page'>Encuentra <span>inspiración</span> infinita en cada nota</h1>
                <p>Transforma tus pensamientos en palabras</p>
            </div>
            <Carousel/>
        </section>
    )
}

export default LandingPage;