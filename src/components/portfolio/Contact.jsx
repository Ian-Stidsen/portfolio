import React, { useRef } from 'react';
import './stylesheet/Contact.css';

export function Contact() {

  const emailForm = useRef();

  return (
    <>
    <form ref={emailForm} className='portfolio-contact'>
      <input type="text" id='name' name='name' placeholder='Your name' />
      <input type="text" id='email' name='email' placeholder='Your email' />
      <input type="text" id='subject' name='subject' placeholder='Subject' />
      <textarea id='message' name='message' placeholder='Message'></textarea>
    </form>
    <button className='submit-contact'>Submit</button>
    </>
  )
}