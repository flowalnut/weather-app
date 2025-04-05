
import {useEffect, useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.reset.css";
import "./App.css";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton.js";
import ClipLoader from "react-spinners/ClipLoader";

//01. 앱시 실행되자 마자 현재 위치 기반의 날씨가 보인다.
//02. 날씨정보 > 도시, 섭씨, 화씨, 날씨 상태정보가 보인다. 
//03. 5개의 버튼이 있다. (현재위치1개, 다른도시4개)
//04. 도시버튼 클릭할 때 마다 도시별 날씨가 나온다
//05. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다. 
//06. 데이터를 들오고는 동안 로딩 스피너가 돈다. 

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);
  const cities = ['paris', 'new york', 'tokyo', 'seoul']
  const [selectedCity, setSelectedCity] = useState('current');
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_API_KEY}`
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
    setWeather(data);
    setLoading(false);
  }

  useEffect(() => {
    if(city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div className="weather_container">
      {loading? (
        <ClipLoader
        color="rgba(255,255,255,.3)"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      ) : (
      <div className="ch_inner">
        <WeatherBox weather={weather}/>
        <WeatherButton 
          cities = {cities} 
          setCity = {setCity} 
          getCurrentLocation={getCurrentLocation}   
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>
      )}
    </div>
  );
}

export default App;
