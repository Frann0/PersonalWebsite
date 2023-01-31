import React, { useEffect } from 'react'
import { projectDTO } from '../../../models/projects/projectInterfaces'
import Icon from '../../Shared/icon/Icon'
import './Carousel.scss'

const Carousel = (project: projectDTO) => {
    const [isMobile, setIsMobile] = React.useState(false)

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
                    <img src={image} alt="" key={index} />
                )
            })}
        </div>
    )
}

export default Carousel