import React, { useState, useEffect, useRef } from 'react';
import './Slider.css'
import _ from 'underscore'

const Slider = ({ startFrom = 0, children, automatic = false, time = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(startFrom || 0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0);

    const [isMove, setIsMove] = useState(false);

    const [moveDev, setMoveDev] = useState(0);
    const [auto, setAuto] = useState(automatic)

    let coordinatesActiveSlide = currentSlide * (-100)
    let moveDeviation = isMove ? moveDev - touchStart : 0
    // let moveDeviation = isMove ? touchEnd - touchStart : 0
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

    const handleTouchStart = clientX => {
        setIsMove(true)
        setTouchStart(clientX);
    }

    const handleTouchMove = clientX => {
        // console.log(window.innerWidth)
        // console.log(clientX)
        console.log(clientX)
        setMoveDev(clientX)
        // setTouchEnd(clientX) //другую переменную 
    }

    const handleTouchEnd = clientX => {
        console.log(clientX)
        setTouchEnd(clientX)
        setMoveDev(clientX)
        // setMoveDev(clientX)
        setIsMove(false)
        const a = touchEnd - touchStart
        if (a < 0 && a < 250) {
            next();
            return
        }

        if (a > 0 && a > -250) {
            prev();
            return
        }
    }

    return (
        <div className='slider'
            onMouseDown={e => handleTouchStart(e.clientX)}
            // onMouseMove={e => handleTouchMove(e.clientX)}
            onMouseMove={_.debounce(e => handleTouchMove(e.clientX), 200)}
            onMouseUp={(e) => handleTouchEnd(e.clientX)}

            onTouchStart={e => handleTouchStart(e.targetTouches[0].clientX)}
            onTouchMove={e => handleTouchMove(e.targetTouches[0].clientX)}
            onTouchEnd={() => handleTouchEnd()}
        >
            {
                children.map(item => {
                    return (
                        <div
                            className='slide'
                            key={item.key}
                            style={{ transform: `translateX(calc(${coordinatesActiveSlide}% + ${moveDeviation}px))` }}
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
                            key={s.key}
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



// import React, { useState, useEffect, useRef } from 'react';
// import './Slider.css'
// import _ from 'underscore'

// const Slider = ({ startFrom, children, automatic = false, time = 5000 }) => {
//     const [currentSlide, setCurrentSlide] = useState(startFrom || 0)
//     const [touchStart, setTouchStart] = useState(0)
//     const [touchEnd, setTouchEnd] = useState(0);
//     const [isMove, setIsMove] = useState(false);
//     const [moveDev, setMoveDev] = useState(0);
//     const [auto, setAuto] = useState(automatic)

//     let coordinatesActiveSlide = currentSlide * (-100)
//     let moveDeviation = isMove ? touchEnd - touchStart : 0
//     const timerRef = useRef(null)


//     useEffect(() => {
//         if (timerRef.current) {
//             clearTimeout(timerRef.current);
//         }
//         timerRef.current = setTimeout(() => {
//             if (auto) {
//                 setCurrentSlide(currentSlide === (children.length - 1) ? 0 : currentSlide + 1);
//             }
//         }, time);
//         return () => clearTimeout(timerRef.current);
//     }, [auto, currentSlide]);


//     const next = () => {
//         setCurrentSlide(currentSlide === (children.length - 1) ? 0 : currentSlide + 1)
//     }

//     const prev = () => {
//         setCurrentSlide(currentSlide === 0 ? (children.length - 1) : currentSlide - 1)
//     }

//     const updateNavElements = index => {
//         setCurrentSlide(index)
//     }

//     const handleTouchStart = clientX => {
//         setIsMove(true)
//         setTouchStart(clientX);
//     }

//     const handleTouchMove = clientX => {

//         setTouchEnd(clientX) //другую переменную 
//     }

//     const handleTouchEnd = () => {
//         if (touchStart - touchEnd > 150) {
//             next();
//         }

//         if (touchStart - touchEnd < -150) {
//             prev();
//         }
//         setIsMove(false)
//     }

//     return (
//         <div className='slider'
//             onMouseDown={e => handleTouchStart(e.clientX)
//             }
//             // onMouseMove={e => handleTouchMove(e.clientX)}
//             onMouseMove={_.debounce(e => handleTouchMove(e.clientX), 50)}
//             onMouseUp={() => {
//                 setMoveDev()
//                 handleTouchEnd()}
//             }

//             onTouchStart={e => handleTouchStart(e.targetTouches[0].clientX)}
//             onTouchMove={e => handleTouchMove(e.targetTouches[0].clientX)}
//             onTouchEnd={() => handleTouchEnd()}
//         >
//             {
//                 children.map((item, index) => {
//                     return (
//                         <div
//                             className='slide'
//                             key={index}
//                             style={{ transform: `translateX(calc(${coordinatesActiveSlide}% + ${moveDeviation}px))` }}
//                         >
//                             {item}
//                         </div>
//                     )
//                 })
//             }

//             <button id='goLeft' onClick={prev}><span className="symbol">&#60;</span></button>
//             <button id='goRight' onClick={next}><span className="symbol">&#62;</span></button>

//             <div className="slider-wrapper__nav" >
//                 {
//                     children.map((s, i) => {
//                         return <span
//                             key={i}
//                             className={currentSlide === i ? 'active' : ''}
//                             onClick={() => updateNavElements(i)}>
//                         </span>
//                     }
//                     )
//                 }
//             </div>
//         </div >
//     )
// }

// export default Slider



