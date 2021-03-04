import React from 'react'
import Slider from './components/slider/Slider'
import './App.css'
import image1 from './assets/image_1.jpg'
import image2 from './assets/image_2.jpg'
import image3 from './assets/image_3.jpg'
import image4 from './assets/image_4.jpg'
import image5 from './assets/image_5.jpg'

const slides = [
    {
        id: 1,
        url: image1,
    },
    {
        id: 2,
        url: image2,
    },
    {
        id: 3,
        url: image3,
    },
    {
        id: 4,
        url: image4,
    },
    {
        id: 5,
        content: "hello world"
    },
    {
        id: 6,
        url: image5
    }
]

const App = () => {
    return <Slider startFrom={1} automatic={false} time={3000}>
        {
            slides.map(slide => (
                <div className='slider__slide' key={slide.id}
                    style={{ backgroundImage: slide.url ? `url(${slide.url})` : '' }}>
                    {slide.content || ''}
                </div>)
            )
        }

    </Slider>
}

export default App;







































