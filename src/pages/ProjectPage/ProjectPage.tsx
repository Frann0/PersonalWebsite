import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/projectpage/Banner/Banner'
import Carousel from '../../components/projectpage/Carousel/Carousel'
import Info from '../../components/projectpage/Info/Info'
import NextProject from '../../components/projectpage/NextProject/NextProject'
import Footer from '../../components/Shared/Footer/Footer'
import { projectDTO } from '../../models/projects/projectInterfaces'
import { useStore } from '../../stores/store'
import './ProjectPage.scss'
const ProjectPage = () => {
    const { projectStore } = useStore();
    const params = useParams();
    const [project, setProject] = React.useState<projectDTO>(projectStore.projects[parseInt(params.id!)]);

    useEffect(() => {
        document.getElementsByClassName('ProjectPage_Container')[0].scrollTo(0, 0);
        setProject(projectStore.projects[parseInt(params.id!)])

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