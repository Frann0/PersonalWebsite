import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../icon/Icon'
import './Footer.scss'
const Footer = () => {

  const getYear = () => {
    const date = new Date()
    return date.getFullYear()
  }

  const socials = [
    {
      name: 'github',
      link: '',
    },
    {
      name: 'linkedin',
      link: '',
    },
    {
      name: 'codepen',
      link: '',
    },
    {
      name: 'dribble',
      link: '',
    },
  ]

  return (
    <div className='Footer_Container'>
      <div className='Footer_Wrapper'>
        <div className='Footer_Copyright'>
          <p className='Footer_CopyrightText'>
            &copy; {getYear()} Mike Handberg Hovedskov
          </p>
        </div>
        <div className='Footer_Socials'>
          {socials.map((social, index) => (
            <Link to={social.link} key={index} target='_blank' rel='noreferrer'>
              <Icon name={social.name} width={20} height={20} key={index} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer