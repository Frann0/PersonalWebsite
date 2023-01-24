import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Banner, { projectDTO } from '../../components/projectpage/Banner/Banner'
import Carousel from '../../components/projectpage/Carousel/Carousel'
import Info from '../../components/projectpage/Info/Info'
import Footer from '../../components/Shared/Footer/Footer'
import { useStore } from '../../stores/store'
import './ProjectPage.scss'
const ProjectPage = () => {
    const { projectStore } = useStore();
    const params = useParams();
    const [project, setProject] = React.useState<projectDTO>(projectStore.projects[parseInt(params.id!)]);

    console.log(params.id);
    console.log(projectStore.projects[0]);



    return (
        <div className='ProjectPage_Container'>
            <Banner {...project!} />
            <Info {...project!} />
            <Carousel {...project!} />
            <Footer />
        </div>
    )
}

export default ProjectPage