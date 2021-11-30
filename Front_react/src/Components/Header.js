import React from 'react'
// import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import '../Styles/Header.css'
// import UploadForm from './UploadForm'

class Header extends React.Component {
    
    render(){
        return (
            <header className="entetePage">
                <nav>
                    <div className='navDark'>
                        <ul>
                            <li className="magazines"> <a href="https://www.nationalgeographic.fr/abonnements-national-geographic">magazines</a></li>
                            <li><a href="https://www.nationalgeographic.fr/abonnements-national-geographic#showNewsletter=true">newsletter</a></li>
                            <li className="television"><a href="https://www.nationalgeographic.fr/video/programmes-tv-national-geographic-national-geographic-wild">télévision</a></li>
                        </ul>
                        <div> <a href="https://www.nationalgeographic.fr">national geographic</a></div>
                    </div>
                    <div className='navWhite'>
                        <div className="divLogo">
                            <a href="/"><img className="imgLogo" src={logo} alt="loge National geographic"/></a>
                            <a href="/"><div className="divTitreLogo">unicornshare</div></a>
                        </div>
                        
                        <button className="uploadHeader">upload</button>
                        
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header