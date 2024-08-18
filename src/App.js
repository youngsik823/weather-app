import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherButton from "./component/WeatherButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
    const [weather, setWeather] = useState(null);
    const [city, setCity] = useState("");
    const cities = ["paris", "new york", "seoul", "tokyo"];
    const [loading, setLoading] = useState(false);
    const [color, setColor] = useState("#ffffff");
    const [errorMessage, setErrorMessage] = useState("");
    const [currentLocation, setCurrentLocation]=useState(false);

    const getCurrentLocation = () =>
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            weatherCurrentLocaiton(lat, lon);
        });

    const weatherCurrentLocaiton = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=de14f99f543bf8277bafbe0fb88518cd&units=metric
`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
            setCity("");
            setCurrentLocation(true);
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (city == "") {
            setLoading(true);
            getCurrentLocation();
        } else {
            setLoading(true);
            getWeatherByCity();
        }
    }, [city]);

    const getWeatherByCity = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de14f99f543bf8277bafbe0fb88518cd&units=metric`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setWeather(data);
            setCurrentLocation(false);
            setLoading(false);
        } catch (error) {
            setErrorMessage(error.message);
            setLoading(false);
        }
    };

    return (
        <div>
            {loading ? (
                <div className="container">
                    <ClipLoader
                        color={color}
                        loading={loading}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            ) : errorMessage ? (
                <div className="container">
                    <div className="error">{errorMessage}</div>
                </div>
            ) : (
                <div className="container">
                    <WeatherBox weather={weather} />
                    <WeatherButton
                        cities={cities}
                        setCity={setCity}
                        getCurrentLocation={getCurrentLocation}
                        city={city}
                        currentLocation={currentLocation}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
