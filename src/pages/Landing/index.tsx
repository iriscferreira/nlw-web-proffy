import React from 'react';

import logoImg from '../../assets/images/logo.svg';

function Landing(){
    return (
        <div id="page-lading">
            <div id="page-lading-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;