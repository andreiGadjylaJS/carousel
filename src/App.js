import React from 'react'
import Slider from './components/slider/Slider'
import './App.css'
// import Slide from './components/slide/Slide'
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
        text: "hello world"
    }
]

const App = () => {
    return <Slider startFrom={1} automatic={false} time={3000}>
        {
            slides.map(slide => {
                return <div className='slider__slide_content' key={slide.id}
                    style={{ backgroundImage: slide.url ? `url(${slide.url})` : '' }}>
                    {slide.text || ''}
                </div>

            })
        }

    </Slider>
}

export default App;












// import React from 'react'
// import Slider from './components/slider/Slider'
// import Slide from './components/slide/Slide'
// import image1 from './assets/image_1.jpg'
// import image2 from './assets/image_2.jpg'
// import image3 from './assets/image_3.jpg'
// import image4 from './assets/image_4.jpg'
// import image5 from './assets/image_5.jpg'

// const slides = [
//     {
//         id: 1,
//         url: image1,
//     },
//     {
//         id: 2,
//         url: image2,
//     },
//     {
//         id: 3,
//         url: image3,
//     }
// ]


// const App = () => {
//     return (
//         <Slider startFrom={2} automatic={false} time={3000}>
//             {/* <Slide >Slide1</Slide>
//             <Slide><div>2</div></Slide> */}
//             <Slide url={image1}></Slide>
//             <Slide url={image2}></Slide>
//             <Slide url={image3}></Slide>
//             <Slide url={image3}></Slide>
//             <Slide url={image3}></Slide>
//         </Slider>
//     )

// }

// export default App;






































