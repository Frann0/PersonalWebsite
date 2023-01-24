import React from 'react'
import './Hero.scss'
import  logo  from '../../../assets/shared/logo.svg'
import scroll from '../../../assets/shared/scroll.svg'

const Hero = () => {

  const goTo = (link: string) => {
    return (e: any) => {
        e.preventDefault()
        window.location.href = `/#${link}`
    }
}

  return (
    <div className='Hero_Container' id='hero'>
      <div className='Hero_Wrapper'>

        <div className='Hero_ImageContainer'>
          <img className='Hero_Image' src={logo} alt='logo' />
        </div>

        <div className='Hero_ContentContainer'>
          <h1 className='Hero_Name'>
            Mike Handberg Hovedskov
          </h1>
          <h2 className='Hero_Title'>
            UI/UX Designer - Frontend Web Developer
          </h2>
          <p className='Hero_Description'>
            I am a <span className='Hero_Highlight'>passionate</span> UI/UX Designer and Frontend Developer
            
          </p>
          <p className='Hero_Description Hero_Highlight'>
            Let's work together!
          </p>
        </div>
        <div className='Hero_CalltoactionContainer'>
          <button className='Hero_CalltoactionButton' onClick={goTo('contact')}>
            Contact me
          </button>
        </div>

        <div className='Hero_ScrollContainer'>
          <img src={scroll} alt="" onClick={goTo('about')}/>
        </div>
      </div>
    </div>
  )
}

export default Hero