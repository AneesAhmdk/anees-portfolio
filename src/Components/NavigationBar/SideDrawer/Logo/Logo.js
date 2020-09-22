import React from 'react';
import companyLogo from '../../../../assets/company_logo_inverted.png';
import './Logo.css';

const logo = props => (
    <div className = "logo">
        <img src = {companyLogo} alt = 'personal logo'/>
    </div>
)

export default logo;