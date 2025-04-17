import React, { useState, useEffect } from 'react';
import avatarProfile from '../assets/avatar-profile.png';
import resume from '../assets/yeikol_villalobos_cv_2024.pdf';

function SidebarContainer({ toggleSidebar }: { toggleSidebar: () => void }) {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll('section'); // Asegúrate de que cada página sea un `<section>`
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Ajusta el umbral de visibilidad
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className='sidebar-content'>   
      <div className='sidebar-avatar'>
        <img src={avatarProfile} alt="yeikol" style={{ width: '250px', height: 'auto' }}/>
        <h3>Yeikol <span>Villalobos</span></h3>
        <h2>Developer</h2>
        <div className='sidebar-social'>
          <a href="https://github.com/yeikol2703" className='social-icon'><i className="bi bi-github"></i></a>
          <a href="https://www.instagram.com/goninthewild/" className='social-icon'><i className="bi bi-instagram"></i></a>
          <a href="https://www.linkedin.com/in/yeikol-villalobos-1b784916a" className='social-icon'><i className="bi bi-linkedin"></i></a>
          <a href={resume} className='social-icon'><i className="bi bi-arrow-down-circle"></i></a>
        </div>
      </div>

      <div className='sidebar-links'>
        <ul>
          {[
            { href: "#home", icon: "bi-house", label: "Home" },
            { href: "#about", icon: "bi-person", label: "About" },
            { href: "#resume", icon: "bi-person-vcard", label: "Resume" },
            { href: "#portfolio", icon: "bi-briefcase", label: "Portfolio" },
            { href: "#contact", icon: "bi-at", label: "Contact" }
          ].map(({ href, icon, label }) => (
            <li key={href} className={activeSection === href ? "active" : ""}>
              <a
                href={href}
                onClick={(e) => {
                  setActiveSection(href);
                  toggleSidebar();  // Cierra el sidebar al hacer clic
                }}
              >
                <i className={`bi ${icon}`}></i> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className='sidebar-download-btn'>
        <a href={resume} className="sidebar-btn-slide">
          <span className="circle">
            <i className="bi bi-file-earmark-arrow-down"></i>
          </span>
          <span className="sidebar-download-title">Download CV</span>
          <span className="sidebar-download-title-hover">Click Here</span>
        </a>
      </div>
    </div>
  );
}

export default SidebarContainer;
