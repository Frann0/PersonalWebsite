import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { projectDTO } from '../../../models/projects/projectInterfaces';
import { useStore } from '../../../stores/store';
import Workcard from '../../Shared/Workcard/Workcard';
import './NextProject.scss'
const NextProject = () => {
    const { projectStore } = useStore();
    const params = useParams();
    const [nextProject, setNextProject] = React.useState<projectDTO>();

    useEffect(() => {
        if (parseInt(params.id!) === projectStore.projects.length - 1) {
            setNextProject(projectStore.projects[0])
        }
        else {
            setNextProject(projectStore.projects[parseInt(params.id!) + 1])
        }

        projectStore.projects[parseInt(params.id!)]
    }, [params.id])

    return (
        <div className='Next_Container'>
            <div className='Next_Wrapper'>
                <div className='Next_InfoContainer'>
                    <h1 className='Next_Title'>Next Project</h1>
                </div>
                <div className='Next_CardsContainer'>
                    <Workcard {...nextProject!} />
                </div>
            </div>
        </div>
    )
}

export default NextProject