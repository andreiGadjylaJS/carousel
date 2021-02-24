import React from 'react'
import './ImgComponent.css'

const ImgComponent = ({ src }) => {
    return (
        <img src={src} alt='slide-img' className="img-slider"></img>
    )
}

export default ImgComponent