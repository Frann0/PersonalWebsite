import React from 'react'
import './About.scss'
import billede from '../../../assets/billede.png'

const About = () => {
  return (
    <div className='About_Container' id='about'>
      <div className='About_Wrapper'>
        <div className='About_ContentContainer'>
          {/**
           * LEFT SIDE
           */}
          <div className='About_InfoContainer'>
            <div className='About_InfoContentGroup'>
              <h1 className='About_InfoTitle'>Who am I?</h1>
              <p className='About_InfoDescription'>
                UI/UX design is the process of creating interfaces that are both aesthetically pleasing and easy to use. Front-end developers are not typically responsible for the design of user interfaces, but understanding how to create a user interface that is both user-friendly and visually appealing can be beneficial to their development work. There are a number of factors that go into creating a user interface that is both user-friendly and visually appealing. UX designers need to understand the user's needs and want and be able to think about how users will interact with the interface, and what features will be most useful to them.
                <br></br> <br></br><br></br>
                I'm Mike Hovedskov, a passionate web application designer and developer with a focus on UI/UX Design. I specialize in creating visually stunning front-end web applications, all with my unique perspective on UI/UX Design. I have expertise in mock-ups, photo editing, image cropping, photo manipulation, and other graphic design services. I have an AP Degree in Computer Science with a top grade and I am currently waiting to start the process of getting my bachelor's degree in web design, which I hope will start in August 2023. I have been around computers my whole life and always had a curiosity for technical work. My love for programming and clean, elegant design has helped me become a professional and interactive website developer. I'm always looking to further my knowledge and utilize the latest and greatest tools available.
              </p>
            </div>
            <div className='About_InfoContentGroup'>
              <h1 className='About_InfoTitle'>How I work.</h1>
              <p className='About_InfoDescription'>
                When starting a new project, it is important to gather as much relevant information as possible. This includes understanding the customer's goals, demographics, preferences, and visual inspirations. Researching the industry and competitors is also essential, as it provides context for the project and helps to identify areas of opportunity. After gathering the necessary information, I typically conceptualize the application's layout and create a prototype in a design application such as Figma or Adobe XD. Then, I move on to visual design, using tools such as Photoshop and Figma. Finally, I utilize HTML, CSS, and JavaScript to translate the design into code, while maintaining best practices with whatever framework is used.
              </p>
            </div>

          </div>
          {/**
            * RIGHT SIDE
            */}

          <div className='About_picContainer'>
            <img className='About_pic' src={billede} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About