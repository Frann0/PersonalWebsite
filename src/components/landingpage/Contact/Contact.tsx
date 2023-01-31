import React, { useRef } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [subject, setSubject] = React.useState('')

  const [nameError, setNameError] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false)
  const [messageError, setMessageError] = React.useState(false)
  const [subjectError, setSubjectError] = React.useState(false)


  const form = useRef<HTMLFormElement>({} as HTMLFormElement);
  const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

  const sendEmail = (e: any) => {

    if (name.length === 0 || email.length === 0 || !email.match(emailRegex) || message.length === 0 || subject.length === 0) {
      setNameError(name.length === 0)
      setEmailError(email.length === 0 || !email.match(emailRegex))
      setMessageError(message.length === 0)
      setSubjectError(subject.length === 0)

      return
    }



    e.preventDefault();
    //clear form
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')


    emailjs.sendForm('service_ue1nt1o', 'template_tjkixlq', form.current, 'ROP0xdoYsl3CxH7_y')
      .then((result) => {
      }, (error) => {
      });
  };

  return (
    <div className='Contact_Container' id='contact'>
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
        <form ref={form} onSubmit={sendEmail} className='Contact_FormContainer'>
          <div className={`Contact_InputContainer ${name.length !== 0 ? 'Contact_Filled' : ''} ${nameError ? 'Contact_Error' : ''}`}>
            <input type="text" className={`Contact_Input `} value={name} placeholder='Your name' onChange={(e) => { setName(e.target.value); setNameError(false) }} name='name' />
          </div>
          <div className={`Contact_InputContainer ${email.length !== 0 ? 'Contact_Filled' : ''} ${emailError ? 'Contact_Error' : ''}`}>
            <input type="text" className={`Contact_Input `} value={email} placeholder='Your email' onChange={(e) => { setEmail(e.target.value); setEmailError(false) }} name='email' />
          </div>
          <div className={`Contact_InputContainer ${subject.length !== 0 ? 'Contact_Filled' : ''} ${subjectError ? 'Contact_Error' : ''}`}>
            <input type="text" className={`Contact_Input `} value={subject} placeholder='Subject' onChange={(e) => { setSubject(e.target.value); setSubjectError(false) }} name='subject' />
          </div>
          <div className={`Contact_InputContainer Contact_InputLarge ${message.length !== 0 ? 'Contact_Filled' : ''} ${messageError ? 'Contact_Error' : ''}`}>
            <textarea className={`Contact_Textarea `} value={message} placeholder='Message' onChange={(e) => { setMessage(e.target.value); setMessageError(false) }} name='message' />
          </div>
        </form>

        <div className='Contact_SendContainer'>
          <button className='Contact_SendButton' onClick={sendEmail} >
            Send Message
          </button>
        </div>
      </div>
    </div >
  )
}

export default Contact