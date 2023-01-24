import React from 'react'
import Icon from '../../Shared/icon/Icon'
import { projectDTO } from '../Banner/Banner'
import './Carousel.scss'

const Carousel = (project: projectDTO) => {

    const [currentImage, setCurrentImage] = React.useState(0)
    const handleRight = () => {

        if (currentImage < project.carouselImages.length - 1) {
            setCurrentImage(currentImage + 1)
        } else {
            setCurrentImage(0)
        }
    }

    const handleLeft = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1)
        } else {
            setCurrentImage(project.carouselImages.length - 1)
        }
    }



    return (
        <div className='Carousel_Container' style={{ 'backgroundImage': `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.02%, #000000f0 100%),url(${project.carouselImages[currentImage]})` }}>
            <div className='Carousel_Wrapper'>
                <div className='Carousel_Button' onClick={handleLeft}>
                    <Icon name='chevron_left' width={120} height={160} />
                </div>

                <div className='Carousel_Button' onClick={handleRight}>
                    <Icon name='chevron_right' width={120} height={160} />
                </div>
            </div>
        </div>
    )
}

export default Carousel