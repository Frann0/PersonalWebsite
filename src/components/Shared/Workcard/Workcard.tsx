import React from 'react'
import { Link } from 'react-router-dom'
import { projectDTO } from '../../../models/projects/projectInterfaces'
import './Workcard.scss'

const Workcard = (card: projectDTO) => {

    return (
        <Link className='Workcard_CardContainer' style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.02%, #000000f0 100%), url(${card.image})`
        }} to={card.link}>
            <div className='Workcard_Card'>
                <h1 className='Workcard_CardTitle'>
                    {card.title}
                </h1>
                <p className='Workcard_CardCategory'>
                    {card.category}
                </p>
            </div>
        </Link>
    )
}

export default Workcard