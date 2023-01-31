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
      link: 'https://github.com/frann0',
    },
    {
      name: 'linkedin',
      link: 'https://linkedin.com/in/mikehovedskov',
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

  const goto = (link: string) => {
    return (e: any) => {
      e.preventDefault()
      window.open(link, '_blank')
    }
  }


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
            <div onClick={goto(social.link)} key={index}>
              <Icon name={social.name} width={20} height={20} key={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer