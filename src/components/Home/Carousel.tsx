import vector from '../../assets/vector_celeste.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import illustration1 from '../../assets/landing-page/illustration_1.png';
import illustration2 from '../../assets/landing-page/illustration_2.png';
import illustration3 from '../../assets/landing-page/illustration_3.png';

const Carousel = () => {
    return (
        <div className='landing-page-carousel'>
            <div className='carousel-illustrations'>
                <img className='illustration-primary' src={illustration1} alt=""/>
                <div>
                    <img className='illustration-secondary' src={illustration3} alt=""/>
                    <button type='submit'><img src={arrowRight} alt=""/></button>
                    <img className='illustration-secondary' src={illustration2} alt=""/>
                </div>
            </div>
            <img className='carousel-background' src={vector} alt="vector background"/>
        </div>
    )
};

export default Carousel;