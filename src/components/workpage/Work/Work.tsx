import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../reduxStores/store'
import { useStore } from '../../../stores/store'
import Workcard from '../../Shared/Workcard/Workcard'
import './Work.scss'
const Work = () => {
    const projects = useSelector((state: RootState) => state.project)
    const dispatch = useDispatch();

    return (
        <div className='WorkComponent_Container' id='work'>
            <div className='WorkComponent_Wrapper'>
                <div className='WorkComponent_InfoContainer'>
                    <h1 className='WorkComponent_Title'>Portfolio List</h1>
                    <p className='WorkComponent_Description'>
                        Here are some of my best projects that showcase my skills and abilities. This is ofcourse not a definitive list as it will continue to grow as my career goes on. I hope you enjoy them!
                    </p>
                </div>
                <div className='WorkComponent_CardsContainer'>
                    {projects.map((card, index) => (
                        <Workcard {...card} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Work