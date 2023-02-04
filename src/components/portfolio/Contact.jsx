import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

import './stylesheet/Contact.css';

export function Contact() {

  const emailForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    /* "portfolio-service",
    "portfolio-template",
    emailForm.current,
    "8nesMxDbdPp8ZsJoH" */
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      emailForm.current,
      process.env.REACT_APP_API_KEY
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    )
  };

  return (
    <>
    <form ref={emailForm} className='portfolio-contact'>
      <input type="text" id='name' name='name' placeholder='Your name' />
      <input type="text" id='email' name='email' placeholder='Your email' />
      <input type="text" id='subject' name='subject' placeholder='Subject' />
      <textarea id='message' name='message' placeholder='Message'></textarea>
    </form>
    <button className='submit-contact' onClick={sendEmail}>Submit</button>
    </>
  )
}