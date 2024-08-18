import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({
    cities,
    setCity,
    getCurrentLocation,
    city,
    currentLocation,
}) => {
    return (
        <div>
            <Button
                variant={`${currentLocation ? "warning" : "danger"}`}
                onClick={() => getCurrentLocation()}
            >
                Current Location
            </Button>

            {cities.map((item, index) => (
                <Button
                    variant={`${city == item ? "warning" : "danger"}`}
                    key={index}
                    onClick={() => setCity(item)}
                >
                    {item}
                </Button>
            ))}
        </div>
    );
};

export default WeatherButton;
