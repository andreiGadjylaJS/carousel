import React from 'react'
import Slider from './components/slider/Slider'
import Slide from './components/slide/Slide'
import image1 from './assets/image_1.jpg'
import image2 from './assets/image_2.jpg'
import image3 from './assets/image_3.jpg'
import image4 from './assets/image_4.jpg'
import image5 from './assets/image_5.jpg'

const App = () => {
    return (
        <Slider startFrom={1} automatic={true} time={3000}>
            <Slide>hello</Slide>
            <Slide url={image1}></Slide>
        </Slider>
    )

}

export default App;

























