import React, { useRef, useState, useEffect } from 'react';
import './Slider.css'
import ImgComponent from '../imgComponents/ImgComponent'
import image1 from '../../assets/image_1.jpg'
import image2 from '../../assets/image_2.jpg'
import image3 from '../../assets/image_3.jpg'
import image4 from '../../assets/image_4.jpg'
import image5 from '../../assets/image_5.jpg'

const Slider = () => {
    const sliderArr = [
        <ImgComponent src={image1} />,
        <ImgComponent src={image2} />,
        <ImgComponent src={image3} />,
        <ImgComponent src={image4} />,
        <ImgComponent src={image5} />]

    const [x, setX] = useState(0)

    const goLeft = () => {
        x === 0 ? setX(- 100 * (sliderArr.length - 1)) : setX(x + 100)
    }
    const goRight = () => {
        x === - 100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100)
    }

    return (
        <div className='slider'>
            {
                sliderArr.map((item, index) => {
                    return (
                        <div
                            className="slide"
                            key={index}
                            style={{ transform: `translateX(${x}%)` }}
                        >
                            {item}
                        </div>
                    )
                })
            }
            <button id="goLeft" onClick={goLeft}>&#60;</button>
            <button id="goRight" onClick={goRight}>&#62;</button>
        </div>
    )

}

export default Slider

