import React, { useRef, useState, useEffect } from 'react';
import './Slider.css'

const Slider = () => {
    const sliderArr = [1, 2, 3, 4, 5]

    const [x, setX] = useState(0)

    const goLeft = () => {
        // x === 0 ? setX(0) : setX(x + 100)
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
            <button id="goLeft" onClick={goLeft}>left</button>
            <button id="goRight" onClick={goRight}>right</button>
        </div>
    )

}

export default Slider

