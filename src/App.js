import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";

function App() {
    const [weather, setWeather] = useState(null);
    const cities = ["paris", "new york", "seoul", "tokyo"];
    const getCurrentLocation = () =>
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            weatherCurrentLocaiton(lat, lon);
        });

    const weatherCurrentLocaiton = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=de14f99f543bf8277bafbe0fb88518cd&units=metric
`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
    };

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div>
            <div className="container">
                <WeatherBox weather={weather} />
                <WeatherButton cities={cities} />
            </div>
        </div>
    );
}

export default App;
