import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'


const Slider = ({ startFrom, children, automatic = false, time = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(startFrom || 0)

    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0);

    const [auto, setAuto] = useState(automatic)

    const timerRef = useRef(null)

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            if (auto) {
                setCurrentSlide(currentSlide === (children.length - 1) ? 0 : currentSlide + 1);
            }
        }, time);
        return () => clearTimeout(timerRef.current);
    }, [auto, currentSlide]);


    const next = () => {
        setCurrentSlide(currentSlide === (children.length - 1) ? 0 : currentSlide + 1)
    }

    const prev = () => {
        setCurrentSlide(currentSlide === 0 ? (children.length - 1) : currentSlide - 1)
    }

    const updateNavElements = index => {
        setCurrentSlide(index)
    }

    let coordinatesActiveSlide = currentSlide * (-100)

    const handleTouchStart = clientX => {
        setTouchStart(clientX);
    }

    const handleTouchMove = clientX => {
        setTouchEnd(clientX);
    }

    const handleTouchEnd = () => {

        if (touchStart - touchEnd > 150) {
            next();
        }

        if (touchStart - touchEnd < -150) {
            prev();
        }
        return
    }

    return (
        <div className='slider'
            onMouseDown={e => handleTouchStart(e.clientX)}
            onMouseMove={e => handleTouchMove(e.clientX)}
            onMouseUp={() => handleTouchEnd()}

            onTouchStart={e => handleTouchStart(e.targetTouches[0].clientX)}
            onTouchMove={e => handleTouchMove(e.targetTouches[0].clientX)}
            onTouchEnd={() => handleTouchEnd()}
        >
            {
                children.map((item, index) => {
                    return (
                        <div
                            className='slide'
                            key={index}
                            style={{ transform: `translateX(${coordinatesActiveSlide}%)` }}
                        >
                            {item}
                        </div>
                    )
                })
            }

            <button id='goLeft' onClick={prev}><span className="symbol">&#60;</span></button>
            <button id='goRight' onClick={next}><span className="symbol">&#62;</span></button>

            <div className="slider-wrapper__nav" >
                {
                    children.map((s, i) => {
                        return <span
                            key={i}
                            className={currentSlide === i ? 'active' : ''}
                            onClick={() => updateNavElements(i)}>
                        </span>
                    }
                    )
                }
            </div>
        </div >
    )
}

export default Slider



