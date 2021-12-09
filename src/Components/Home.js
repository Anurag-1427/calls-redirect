import React from 'react'
import './Home.css';

function Home() {
    return (
        <div className="container">
            <div className="header">
                <img src="../images/Title.svg" alt="titleOfWebApp" />
                <img src="../images/Menu.svg" alt="menubtn" />
            </div>

            <div className="content">
                <p>Get your Corporate <span>Phone Number</span> today</p>
                <div className="inner-content">
                     <p>We provide your business to have a cloud-based centralised communication service allowing your users to communicate &amp; collaborate in a way more inherent way.</p>
                </div>
                <button>Get it now</button>
            </div>

            <img src="../images/backgroundImage.png" alt="bgImage" className="bgImg"/>
            <img src="../images/wave (1).svg" alt="wave" className="wave" />
        </div>
        
    )
}

export default Home