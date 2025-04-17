import React from 'react'

function Contact() {
  return (
    <div className='section-container' id="contact">

    <div className='section-header'>
      <h2 className='heading-text'>Get In Touch.</h2>
      <div className='line'></div>
    </div>

    <p className='contact-subtitle'> CHAT WITH ME!</p>


    <div className='contact-box-container'>
      <div className="contact-box-main">
          <div className="mobile-icon-main">
          <i className="bi bi-envelope-at"></i>
          </div>
          <div>
              <p className="contact-text">EMAIL</p>
              <p className="contact"><a href="mailto:yeikolvillalobos27@gmail.com">yeikolvillalobos27@gmail.com</a></p>
          </div>
      </div>

      <div className="contact-box-main">
          <div className="mobile-icon-main">
          <i className="bi bi-phone"></i>
          </div>
          <div>
              <p className="contact-text">PHONE</p>
              <p className="contact"><a href="tel:+50664498492">+506 64498492</a></p>
          </div>
      </div>
    </div>

    <div className='contact-form-container'>
      <div className="form-item">
          <div className="form">
              <label className="form__label">NAME</label>
              <input type="text" className="form__input" placeholder="Your name" id="name"/>
          </div>
          <div className="form">
              <label className="form__label">EMAIL</label>
              <input type="email" className="form__input" placeholder="Your email" id="email"/>
          </div>
      </div>

      <div className="form-item subject-input-main">
          <div className="form">
              <label className="form__label">SUBJECT</label>
              <input type="text" className="form__input" placeholder="Your subject" id="subject"/>
          </div>
      </div>

      <div className="form-item">
          <div className="form">
              <label className="form__label">MESSAGE</label>
              <input type="text" className="form__input" placeholder="Write your text..." id="message"/>
          </div>
      </div>

      <div className="wrapper blog-btn">
        <a className="btn-hover" href="#">Submit Now</a>
      </div>
    </div>
    


    <div className="footer">Copyright © 2024.Yeikol Villalobos All rights reserved.<a target="_blank" href="https://#">YV</a></div>

</div>
  )
}

export default Contact