import React, { useEffect } from 'react'
import './Skills.scss'
import SkillsPic from '../../../assets/Skills_Pic.png'
const Skills = () => {

  const [isMobile, setIsMobile] = React.useState(false)

  const CreativeWorkTools = [
    'Figma',
    'Adobe XD',
    'Adobe Photoshop',
    'Adobe After Effects',
    'Cinema 4D',
  ]

  const FrontendTools = [
    'HTML 5',
    'CSS 3',
    'JavaScript',
    'Typescript',
    'MobX',
    'SignalR',
    'Axios',
    'React',
    'React Native',
    'Blazor',
    'Git',
    'Sass',
    'NPM',
    'Angular',
    'Vite'
  ]

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    return () => {
      setIsMobile(false)
    }
  }, [window.innerWidth])

  return (
    <div className='Skills_Container' id='skills'>
      <div className='Skills_Wrapper'>
        <div className='Skills_ContentContainer'>
          <div className='Skills_PicContainer'>
            <img className='Skills_Pic' src={SkillsPic} alt="" />
          </div>
          <div className='Skills_InfoContainer'>
            <div className='Skills_InfoContentContainer'>
              <h1 className='Skills_InfoTitle'>What I use.</h1>
              <p className='Skills_InfoDescription'>
                During my years in this field, I have gathered a fair bit of knowledge about different tools to help further the design and development and make it easier and faster. That being said, this is only the technology I have used extensively and have build something with. Although I am generally quick to pick up new technologies given the opportunity, and I am not afraid to get out of my comfort zone as i am constantly seeking to better myself within my field of work.
              </p>
            </div>
            <div className='Skills_TableContainer'>
              <div className='Skills_TableContent'>
                <p className='Skills_TableTitle'>
                  Creative Work
                </p>
                <ul className='Skills_TableToolsContainer'>
                  {CreativeWorkTools.map((tool, index) => (
                    <li className='Skills_TableTool' key={index}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='Skills_TableContent'>
                <p className='Skills_TableTitle'>
                  Web Development
                </p>
                <ul className='Skills_TableToolsContainer'>
                  {FrontendTools.map((tool, index) => (
                    <li className='Skills_TableTool' key={index}>
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='Skills_InfoContentContainer'>
              <p className='Skills_InfoDescription'>
                Hopefully this list will continue to grow, as my career progresses and I am currious about which technology I will work with next.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills