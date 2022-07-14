import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail  className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>m.dilekci@windowslive.com</h5>
            <a href="mailto:m.dilekci@windowslive.com">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <p className='text-light'>I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you! <br></br> Istanbul / TURKEY </p>
      </div>
    </section>
  )
}

export default Contact