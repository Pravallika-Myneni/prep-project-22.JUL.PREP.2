import React from 'react';
import "./HourlyForecast.css";

function HourlyForecast({forecast}) {
    const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];
    return (
        <>
        <div className='hourly-container'>
            <div className='day'>{weekdays[forecast.date.getDay()]}</div>
            <div className='hour'>{forecast.date.getHours()}:{forecast.date.getMinutes()}</div>
            <img src={"http://openweathermap.org/img/wn/"+forecast.icon+"@2x.png"} alt="cloudy-icon"/>
            <p>{Math.round(forecast.temperature.maximum)}&#8451;/{Math.round(forecast.temperature.minimum)}&#8451;</p>
        </div>
        </>
    )
}
export default HourlyForecast;