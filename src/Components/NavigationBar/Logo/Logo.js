import React from 'react';
import companyLogo from '../../../assets/company_logo.png';
import companyLogoInverted from '../../../assets/company_logo_inverted.png'
import './Logo.css';

const logo = props => {
    let logo = <img src = {companyLogo} alt = 'logo of Company'/>
    if(props.path === '/'){
        logo = <img src = {companyLogoInverted} alt = 'logo of Company'/>
    }
    return(
    <div className = "logo">
        {logo}
    </div>
    )
}

export default logo