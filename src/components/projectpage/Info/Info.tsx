import React, { useEffect } from 'react'
import { projectDTO } from '../Banner/Banner'
import './Info.scss'
const Info = (project: projectDTO) => {
    const [isMobile, setIsMobile] = React.useState(false)
    console.log(project);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        return () => {
            setIsMobile(false)
        }
    }, [window.innerWidth])

    return (
        <div className='Info_Container'>
            <div className='Info_Wrapper'>
                <div className='Info_ContentContainer'>
                    <div className='Info_About'>
                        <h2 className='Info_About_Title'>About the project.</h2>
                        <p className='Info_About_Description'>{project.info.about}</p>
                    </div>
                    <div className='Info_Involement'>
                        <h2 className='Info_Involement_Title'>My involvement</h2>
                        <p className='Info_Involement_Description'>{project.info.involement}</p>
                    </div>
                    <div className='Info_overallContainer'>
                        <div className='Info_Platform'>
                            <h2 className='Info_Platform_Title'>Platform</h2>
                            <p className='Info_Platform_Description'>{project.info.platform}</p>
                        </div>
                        <div className='Info_Category'>
                            <h2 className='Info_Category_Title'>Category</h2>
                            <p className='Info_Category_Description'>{project.category}</p>
                        </div>
                    </div>
                    <div className='Info_Tools'>
                        <h2 className='Info_Tools_Title'>Tools used.</h2>
                        <div className='Info_Tools_Wrapper'>
                            {project.info.tools.map((tool, index) => (
                                <p className='Info_Tools_Tool' key={index}>{tool}</p>
                            ))}
                        </div>
                    </div>
                </div>
                {!isMobile &&
                    <div className='Info_ImageContainer'>

                    </div>
                }
            </div>
        </div>
    )
}

export default Info