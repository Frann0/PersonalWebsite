import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Workcard from '../../Shared/Workcard/Workcard'
import './Work.scss'
const Work = () => {
  const navigate = useNavigate()

  const WorkCards = [
    {
      title: 'Portfolio',
      category: 'Web Design',
      link: 'https://www.google.com',
    },
    {
      title: 'Portfolio',
      category: 'Web Design',
      link: 'https://www.google.com',
    },
    {
      title: 'Portfolio',
      category: 'Web Design',
      link: 'https://www.google.com',
    },
    {
      title: 'Portfolio',
      category: 'Web Design',
      link: 'https://www.google.com',
    },
    {
      title: 'Portfolio',
      category: 'Web Design',
      link: 'https://www.google.com',
    },
    {
      title: 'Portfolio',
      category: 'Web Design',
      link: 'https://www.google.com',
    },
  ]

  const goTo = (path: string) => () => {
    navigate(path)
  }

  return (
    <div className='Work_Container' id='work'>
      <div className='Work_Wrapper'>
        <div className='Work_InfoContainer'>
          <h1 className='Work_Title'>Latest Work.</h1>
          <p className='Work_Description'>
            This is a selection of my latest work, everything from design to fully fledged apps.
          </p>
        </div>
        <div className='Work_CardsContainer'>
          {WorkCards.map((card, index) => (
            <Workcard {...card} key={index} />
          ))}

        </div>
        <div className='Work_ViewAllContainer'>
          <button className='Work_ViewAllButton' onClick={goTo('/work')}>
            View all
          </button>
        </div>
      </div>
    </div>
  )
}

export default Work