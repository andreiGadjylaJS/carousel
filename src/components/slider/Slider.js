import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'

const Slider = ({ startFrom = 0, children, automatic = false, time = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(startFrom || 0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [isMove, setIsMove] = useState(false);
    const [auto, setAuto] = useState(automatic)

    let coordinatesActiveSlide = currentSlide * (-100)
    let moveDeviation = isMove ? touchEnd - touchStart : 0
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

    const handleTouchStart = (clientX, web = false) => {
        if (web) { setIsMove(true) }
        setTouchStart(clientX);
    }

    const handleTouchMove = (clientX, mob = false) => {
        if (mob) { setIsMove(true) }
        setTouchEnd(clientX)
    }

    const handleTouchEnd = touchEnd => {

        setIsMove(false)
        const shift = touchEnd - touchStart
        if (shift > 150) {
            prev()
        }
        if (shift < -150) {
            next()
        }
    }

    return (
        <div className='slider'
            onMouseDown={e => {
                const web = true
                handleTouchStart(e.clientX, web)
            }}
            onMouseMove={e => handleTouchMove(e.clientX)}
            onMouseUp={e => handleTouchEnd(e.clientX)}

            onTouchStart={e => handleTouchStart(e.changedTouches[0].clientX)}
            onTouchMove={e => {
                const mob = true
                handleTouchMove(e.changedTouches[0].clientX, mob)
            }}
            onTouchEnd={e => handleTouchEnd(e.changedTouches[0].clientX)}
        >
            {
                children.map(item => (
                    <div
                        className={`slide ${isMove ? 'moving' : ''} `}
                        key={item.key}
                        style={{ transform: `translateX(calc(${coordinatesActiveSlide}% + ${moveDeviation}px))` }}
                    >
                        {item}
                    </div>
                )
                )
            }
            <button id='goLeft' onClick={prev}><span className="symbol">&#60;</span></button>
            <button id='goRight' onClick={next}><span className="symbol">&#62;</span></button>

            <div className="slider-wrapper__nav" >
                {
                    children.map((s, i) => (<span
                        key={s.key}
                        className={currentSlide === i ? 'active' : ''}
                        onClick={() => updateNavElements(i)}>
                    </span>
                    )
                    )
                }
            </div>
        </div >
    )
}

export default Slider




