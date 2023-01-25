import React from 'react'
import { projectDTO, projectResource } from '../../../models/projects/projectInterfaces'
import Icon from '../icon/Icon'
import './Buttons.scss'

const Buttons = (resource: projectResource) => {

    const handleClick = () => {
        window.open(resource.link, '_blank')
    }


    return (
        <button className={`Button_Container ${resource.buttonClass}`} onClick={handleClick}>
            <Icon name={resource.iconName} width={20} height={20}/>
            <span className='Button_Title'>{resource.title}</span>
        </button>
    )
}

export default Buttons