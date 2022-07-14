import React from 'react'
import './about.css'
import ME from '../../assets/picture-me.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
           <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aperiam tenetur repellendus illo quos fugit iusto cum, animi ullam, veritatis eum nostrum velit commodi aliquam adipisci hic alias eveniet nulla.
           </p>

           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About