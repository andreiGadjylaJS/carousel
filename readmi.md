# carousel
</br>

##  [Demo](https://sharp-lamarr-471dfc.netlify.app/)
</br>

## Development


Want to run demos locally
```
git clone https://github.com/andreiGadjylaJS/carousel.git
npm install
npm start
open http://localhost:3000
```

## Example
```JavaScript
const App = () => {
    return (
        <Slider startFrom={1} automatic={false} time={3000}>
            <Slide>Slide1</Slide>
            <Slide><div>2</div></Slide>
            <Slide url={image1}></Slide>
            <Slide url={image2}></Slide>
            <Slide url={image3}></Slide>
        </Slider>
    )
}
```

## Props 
startFrom - takes a number, this number will be the starting slide from the entire list of slides

automatic - accepts a boolean value, which indicates whether autoscrolling is enabled or not

time - takes a number that will set the slide scroll time
