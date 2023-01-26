import React, { useEffect } from 'react'
import { projectDTO } from '../../../models/projects/projectInterfaces'
import Icon from '../../Shared/icon/Icon'
import './Carousel.scss'

const Carousel = (project: projectDTO) => {
    const [isMobile, setIsMobile] = React.useState(false)

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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <div className='Carousel_Container'>
            {project.carouselImages.map((image, index) => {
                return (
                    <img src={image} alt="" />
                )
            })}
        </div>
    )
}

export default Carousel