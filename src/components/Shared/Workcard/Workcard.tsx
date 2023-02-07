import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { projectDTO } from '../../../models/projects/projectInterfaces'
import { startLoading, stopLoading } from '../../../reduxStores/loaderSlice'
import { useStore } from '../../../stores/store'
import './Workcard.scss'

const Workcard = (card: projectDTO) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goto = () => {
        dispatch(startLoading)
        setTimeout(() => {
            const t = document.getElementsByClassName('ProjectPage_Container')[0]

            if (t !== undefined) {
                t.scrollTo(0, 0);
            }
        }, 1000)


        setTimeout(() => {
            navigate(`${card.link}`)
            dispatch(stopLoading)
        }, 2000)

    }


    return (
        <div className='Workcard_CardContainer' style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.02%, #000000f0 100%), url(${card.image})`
        }} onClick={goto}>
            <div className='Workcard_Card'>
                <h1 className='Workcard_CardTitle'>
                    {card.title}
                </h1>
                <p className='Workcard_CardCategory'>
                    {card.category}
                </p>
            </div>
        </div>
    )
}

export default Workcard