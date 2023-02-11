import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

import './stylesheet/Contact.css';

export function Contact() {

  const emailForm = useRef();


  const validateForm = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const messageValue = emailForm.current.message.value;
    const emailValue = emailForm.current.email.value;

    if (!validRegex.test(emailValue)) {
      if (messageValue === '') {
        shakeInvalid('both');
        return false;
      }
      shakeInvalid('email');
      return false;
    }
    if (messageValue === '') {
      shakeInvalid('message');
      return false;
    }
    return true;
  };


  function shakeInvalid (input) {
    const emailInput = document.getElementsByClassName('email-input')[0];
    const messageInput = document.getElementsByClassName('message-input')[0];
    switch(input) {
      case 'email':
        emailInput.classList.add('shake');
        break;
      case'message':
        messageInput.classList.add('shake');
        break;
      default:
        emailInput.classList.add('shake');
        messageInput.classList.add('shake');
        break;
    }
    setTimeout(() => {
      emailInput.classList.remove('shake');
      messageInput.classList.remove('shake');
    }, 500);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if(validateForm()){
      emailjs.sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        emailForm.current,
        process.env.REACT_APP_EMAIL_API_KEY
      );
      emailForm.current.reset();
    }
  };

  return (
    <>
    <form ref={emailForm} className='portfolio-contact'>
      <input type="text" id='name' name='name' placeholder='Your name' />
      <input type="text" className='email-input' id='email' name='email' placeholder='Your email' required />
      <input type="text" id='subject' name='subject' placeholder='Subject' />
      <textarea className='message-input' id='message' name='message' placeholder='Message' required />
      <span id='email-asterisk' className='asterisk-span'>*</span>
      <span id='message-asterisk' className='asterisk-span'>*</span>
    </form>
    <button className='submit-contact' onClick={sendEmail}>Submit</button>
    </>
  )
}