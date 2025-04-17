import React from 'react'

function About() {
  return (
    <div className='section-container' id="about">

      <div className='section-header'>
        <h2 className='heading-text'>About me.</h2>
        <div className='line'></div>
      </div>

      <p className='about-summary'>
      Hello, I'm 
      <span> Yeikol </span>
      , a dedicated and skilled professional. I am proactive, honest, and a strong team player, capable of excelling both individually and in collaborative environments. With a commitment to my work, I continuously strive to develop and contribute in a competitive field.
     </p>

    <div className='about-detail-container'>
    
    <div className="about-detail-main">
      <p className="about-detail">Name</p>
      <p className="about-detail-info">Yeikol Villalobos</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Nationality</p>
      <p className="about-detail-info">CR</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">USA Visa</p>
      <p className="about-detail-info">&#10003;	</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Phone</p>
      <p className="about-detail-info">(+506) 64498492</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Email</p>
      <p className="about-detail-info">yeikolvillalobos27@gmail.com</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Experience</p>
      <p className="about-detail-info">5+ years</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Degree</p>
      <p className="about-detail-info">Computer Science</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Freelance</p>
      <p className="about-detail-info">Available</p>
    </div>

    <div className="about-detail-main">
      <p className="about-detail">Languages</p>
      <p className="about-detail-info">English, Spanish, Portuguese</p>
    </div>


    </div>

    </div>
  )
}

export default About