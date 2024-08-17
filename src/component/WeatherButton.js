import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities }) => {
    return (
        <div>
            <Button variant="danger">Current Location</Button>
            <Button variant="danger">paris</Button>
            <Button variant="danger">new york</Button>
        </div>
    );
};

export default WeatherButton;
