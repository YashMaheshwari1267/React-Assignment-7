import React from 'react';
import './Weather.css';

const Weather = props => {
    return (
        <span className="weather-now">
            <div className="place"> {props.city} </div>
            <div className="min-max-temp">{props.temp_max}&deg; | {props.temp_min}&deg;</div>
            <div className="current-temp">{props.temp_curr}&deg;</div>
            <div className="weather-type">{props.weather_type}</div>
            <div className="time">Updated as of {props.time}</div> 
        </span>
    )
}

export default Weather;