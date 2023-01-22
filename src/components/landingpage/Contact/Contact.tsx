import React from 'react'
import './Contact.scss'
const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [subject, setSubject] = React.useState('')

  return (
    <div className='Contact_Container'>
      <div className='Contact_Wrapper'>
        <div className='Contact_InfoContainer'>
          <h1 className='Contact_Title'>Let's work together.</h1>
          <p className='Contact_Description'>
            I hope I have peeked your interest and that we can work together on projects. Whether just saying hi, or wanting to start at project with my help. Feel free to reach out. Either via the contact form below, via my socials or my email at:
          </p>
          <a className='Contact_Description Contact_Highlight' href='mailto:Mikehovedskov@gmail.com'>
            Mikehovedskov@gmail.com
          </a>
          <p className='Contact_Description Contact_Lowlight'>
            I am also available for freelance work.
          </p>
        </div>
        <div className='Contact_FormContainer'>
          <div className={`Contact_InputContainer ${name.length !== 0 ? 'Contact_Filled' : ''}`}>
            <input type="text" className={`Contact_Input `} value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={`Contact_InputContainer ${email.length !== 0 ? 'Contact_Filled' : ''}`}>
            <input type="text" className={`Contact_Input `} value={email} placeholder='Your email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={`Contact_InputContainer ${subject.length !== 0 ? 'Contact_Filled' : ''}`}>
            <input type="text" className={`Contact_Input `} value={subject} placeholder='Subject' onChange={(e) => setSubject(e.target.value)} />
          </div>
          <div className={`Contact_InputContainer Contact_InputLarge ${name.length !== 0 ? 'Contact_Filled' : ''}`}>
            <textarea className={`Contact_Textarea `} value={name} placeholder='Your name' onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className='Contact_SendContainer'>
          <button className='Contact_SendButton'>
            Send Message
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact