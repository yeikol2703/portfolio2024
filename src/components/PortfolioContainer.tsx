import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'
import image01 from '../assets/portfolio/01.png';
import image02 from '../assets/portfolio/02.png';
import image03 from '../assets/portfolio/03.png';
import image04 from '../assets/portfolio/04.png';
import image05 from '../assets/portfolio/05.png';
import image06 from '../assets/portfolio/06.png';


export class PortfolioContainer extends Component {
  render() {
    return (
<div>
<div className='portfolio-galery-row'>
    <div>
    <PortfolioItem link='https://github.com/yeikol2703/controlClientes'
        image={image01}
        header='Control Clientes'
        />
    <PortfolioItem link='https://github.com/yeikol2703/samsung-calc-react'
        image={image04}
        header='Samsung Calculator'
        />
    </div>
       
       <div>
       <PortfolioItem link='https://github.com/yeikol2703/chatbot'
        image={image06}
        header='Chat Bot'
        />
            <PortfolioItem link='https://github.com/yeikol2703/music-bot-discord'
        image={image05}
        header='Music Bot Discord'
        />
       </div>

       <div>
       <PortfolioItem link='https://github.com/yeikol2703/youtube-downloader'
        image={image03}
        header='YouTube Downloader'
        />
      <PortfolioItem link='https://github.com/yeikol2703/weather-app'
        image={image02}
        header='Weather App'
        />
       </div>
      </div>
</div>
    )
  }
}

export default PortfolioContainer