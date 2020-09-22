import React from 'react';
import companyLogo from '../../../assets/company_logo.png';
import companyLogoInverted from '../../../assets/company_logo_inverted.png'
import './Logo.css';

const logo = props => {
    let logo = <img src = {companyLogo} alt = 'personal logo'/>
    if(props.path === '/'){
        logo = <img src = {companyLogoInverted} alt = 'personal logo'/>
    }
    return(
    <div className = "logo">
        {logo}
    </div>
    )
}

export default logo