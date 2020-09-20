import React from 'react';
import './Hourly.css';

const Hourly = () => {
    return (
        <span className="weather-hourly">
            <div style={{fontSize : '16px', fontWeight: 'bold'}}> Hourly </div>
            <div className="card"></div>
        </span>
    )
}

export default Hourly;