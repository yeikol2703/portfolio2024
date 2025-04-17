import React from 'react'

function Resume() {
  return (
    <div className='section-container resume-container' id="resume">

    <div className='resume-left-section'>
        <div className='section-header'>
          <h2 className='heading-text'>Education.</h2>
          <div className='line'></div>
        </div>

        <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">Diplomado en Programacion de Aplicaciones Informaticas
              </p>
              <p className="resume-sub-text">Universidad Nacional de Costa Rica</p>
              <p className="resume-sub-text"> 2018 – 2021</p>
          </div>
       </div>

       <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">Bootcamp CCNA 200 301
              </p>
              <p className="resume-sub-text">Virtual Learning Academy</p>
              <p className="resume-sub-text"> 2020</p>
          </div>
       </div>

       <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">Front-End Developer
              </p>
              <p className="resume-sub-text">Universidad Nacional de Costa Rica</p>
              <p className="resume-sub-text"> 2021</p>
          </div>
       </div>

       <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">Bachillerato Ingeniería en Sistemas de Información
              </p>
              <p className="resume-sub-text">Universidad Nacional de Costa Rica</p>
              <p className="resume-sub-text"> 2018 - 2023</p>
          </div>
       </div>

    </div>


   <div className='resume-right-section'>
    <div className='section-header'>
        <h2 className='heading-text'>Experience.</h2>
        <div className='line'></div>
      </div>

      <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">
              Software Developer 
              </p>
              <p className="resume-sub-text">IBM</p>
              <p className="resume-sub-text"> 2022 - Current</p>
          </div>
       </div>

       <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">
              Frontend Web Developer 
              </p>
              <p className="resume-sub-text">Hornstromp Youtube</p>
              <p className="resume-sub-text"> 2022</p>
          </div>
       </div>

       <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">
              Storage Technical Support Specialist 
              </p>
              <p className="resume-sub-text">Movate / CSS Corp</p>
              <p className="resume-sub-text"> 2022</p>
          </div>
       </div>

       <div className="resume-item">
          <div className="side_circle_ring">
              <div className="small_yellow_border">
                  <div className="small_yellow_circle"></div>
              </div>
          </div>
          <div className="small_yellow_border_main">
              <p className="resume-header">
               Junior Software Developer
              </p>
              <p className="resume-sub-text">Municipalidad de San Pablo de Heredia, Costa Rica</p>
              <p className="resume-sub-text"> 2021 - 2022</p>
          </div>
       </div>

   </div>

   

    </div>
  )
}

export default Resume