import React from 'react'
import Banner from '../../components/projectpage/Banner/Banner'
import Carousel from '../../components/projectpage/Carousel/Carousel'
import Info from '../../components/projectpage/Info/Info'
import Footer from '../../components/Shared/Footer/Footer'
import './ProjectPage.scss'
const ProjectPage = () => {

    return (
        <div className='ProjectPage_Container'>
            <Banner />
            <Info />
            <Carousel />
            <Footer />
        </div>
    )
}

export default ProjectPage