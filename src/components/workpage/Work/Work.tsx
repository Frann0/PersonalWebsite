import React from 'react'
import { useStore } from '../../../stores/store'
import Workcard from '../../Shared/Workcard/Workcard'
import './Work.scss'
const Work = () => {

    const { projectStore } = useStore();

    return (
        <div className='WorkComponent_Container' id='work'>
            <div className='WorkComponent_Wrapper'>
                <div className='WorkComponent_InfoContainer'>
                    <h1 className='WorkComponent_Title'>Latest Work.</h1>
                    <p className='WorkComponent_Description'>
                        This is a selection of my latest work, everything from design to fully fledged apps.
                    </p>
                </div>
                <div className='WorkComponent_CardsContainer'>
                    {projectStore.projects.map((card, index) => (
                        <Workcard {...card} key={index} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Work