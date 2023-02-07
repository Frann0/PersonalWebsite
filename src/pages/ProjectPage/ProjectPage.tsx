import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Banner from '../../components/projectpage/Banner/Banner'
import Carousel from '../../components/projectpage/Carousel/Carousel'
import Info from '../../components/projectpage/Info/Info'
import NextProject from '../../components/projectpage/NextProject/NextProject'
import Footer from '../../components/Shared/Footer/Footer'
import { projectDTO } from '../../models/projects/projectInterfaces'
import { RootState } from '../../reduxStores/store'
import { useStore } from '../../stores/store'
import './ProjectPage.scss'
const ProjectPage = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state: RootState) => state.project)
    const params = useParams();
    const [project, setProject] = React.useState<projectDTO>(projects[parseInt(params.id!)]);

    useEffect(() => {
        setProject(projects[parseInt(params.id!)])

    }, [params.id])



    return (
        <div className='ProjectPage_Container'>
            <Banner {...project!} />
            <Info {...project!} />
            <Carousel {...project!} />
            <NextProject />
            <Footer />
        </div>
    )
}

export default ProjectPage