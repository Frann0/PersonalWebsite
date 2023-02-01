import React, { useEffect } from 'react'
import { projectDTO } from '../../../models/projects/projectInterfaces';
import './Banner.scss'
const Banner = (project: projectDTO) => {
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

