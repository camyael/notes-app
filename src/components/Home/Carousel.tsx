import vector from '../../assets/vector_celeste.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import { useState, useEffect } from 'react';

const illustrations:string[] = [
    "illustration_1.png",
    "illustration_2.png",
    "illustration_3.png"
]

const Carousel = () => {
    const [ selectedIllustration, setSelectedIllustration ] = useState<string[]>(illustrations) 
    const [ index, setIndex ] = useState<number[]>([0, 1, 2])

    useEffect(() => {
        setSelectedIllustration([illustrations[index[0]], illustrations[index[1]], illustrations[index[2]]])
    }, [index])

    const handlePrev = () => {
        const array:number[] = []
        index.forEach(index => {
            index === illustrations.length - 1 ? array.push(0) : array.push(index + 1)
        })
        setIndex(array)
    }

    return (
        <div className='landing-page-carousel'>
            <div className='carousel-illustrations'>
                <div className='illustration-primary'>
                    <img src={selectedIllustration[0]} alt=""/> 
                </div>
                <div className='illustration-secondary'>
                    <img src={selectedIllustration[1]} alt=""/>
                    <button type='submit' onClick={handlePrev}><img src={arrowRight} alt=""/></button>
                    <img src={selectedIllustration[2]} alt=""/>
                </div>
            </div>
            <img className='carousel-background' src={vector} alt="vector background"/>
        </div>
    )
};

export default Carousel;