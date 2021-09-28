import React from "react";
import './Logo.css'

import logo from '../img/aplicação-negativa.svg'

export default props => 
    <logo className="logo">
        <div className='img'>
            <img src={logo} />
        </div>
    </logo>