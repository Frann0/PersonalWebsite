import './LandingPage.scss'

import { observer } from 'mobx-react-lite';
import Hero from '../../components/landingpage/Hero/Hero';
import About from '../../components/landingpage/About/About';
import Skills from '../../components/landingpage/Skills/Skills';
import Work from '../../components/landingpage/Work/Work';
import Contact from '../../components/landingpage/Contact/Contact';
const LandingPage = () => {
  return (
    <div className='LandingPage_Container'>
      <div className='LandingPage_Wrapper'>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  )
}

export default observer(LandingPage)