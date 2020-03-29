import React, { Component } from 'react';
import './Logo.css'
import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render() {
        return (
            <Link to={`/`}><img src="" alt="ProductionWeaver logo." className="logo" /></Link>
        )
    }
}

export default Logo;