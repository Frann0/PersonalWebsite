import React from 'react'
import { Link } from 'react-router-dom'
import './Workcard.scss'

const Workcard = (card: Card) => {

    return (
        <Link className='Workcard_CardContainer' to={card.link}>
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

export interface Card {
    title: string, category: string, link: string
}