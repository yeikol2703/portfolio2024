import React, { useState } from 'react';
import SidebarContainer from './components/SidebarContainer';
import './styles/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
  // Estado para controlar la visibilidad del sidebar
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="App main-container">
      {/* Si el sidebar está visible, lo mostramos; si no, lo ocultamos */}
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <SidebarContainer toggleSidebar={toggleSidebar}/>
      </div>
                {/* Botón de hamburguesa para pantallas pequeñas */}
         <button className="hamburger-menu" onClick={toggleSidebar}>
        {isSidebarVisible ? '×' : '≡'}        </button>
      <div className={`main ${isSidebarVisible ? 'with-sidebar' : ''}`} onClick={()=>setIsSidebarVisible(false)}>


        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="resume"><Resume /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="contact"><Contact /></section>
      </div>
      
    </div>
  );
}

export default App;
