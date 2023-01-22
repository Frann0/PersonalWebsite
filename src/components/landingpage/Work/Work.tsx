import React from 'react'
import { Link } from 'react-router-dom'
import './Work.scss'
const Work = () => {
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
            <Link className='Work_CardContainer' to={card.link} key={index}>
              <div className='Work_Card'>
                <h1 className='Work_CardTitle'>
                  {card.title}
                </h1>
                <p className='Work_CardCategory'>
                  {card.category}
                </p>
              </div>
            </Link>
          ))}

        </div>
        <div className='Work_ViewAllContainer'>
          <button className='Work_ViewAllButton'>
            View all
          </button>
        </div>
      </div>
    </div>
  )
}

export default Work