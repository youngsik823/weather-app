import React from "react";

const WeatherBox = ({ weather }) => {
    const Fahrenheit = Math.ceil((weather?.main.temp * 1.8 + 32));
    const Celsius = Math.ceil(weather?.main.temp);

    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>
                {Celsius}C / {Fahrenheit}화씨
            </h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};

export default WeatherBox;
