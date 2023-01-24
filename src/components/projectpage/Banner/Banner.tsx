import React from 'react'
import './Banner.scss'
const Banner = (project: projectDTO) => {

    console.log(project.image);


    return (
        <div className='Banner_Container' style={{ 'backgroundImage': `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.02%, #000000f0 100%), url(${project.image})` }}>
            <div className='Banner_Wrapper'>
                <h1 className='Banner_Title'>{project.title}</h1>
                <p className='Banner_Description'>{project.category}</p>
            </div>
        </div>
    )
}

export default Banner

export interface projectDTO {
    title: string,
    category: string,
    image: string,
    link: string,
    info: {
        about: string,
        involement: string,
        platform: string,
        tools: string[],
    }
    carouselImages: string[]

}