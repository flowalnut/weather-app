import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, getCurrentLocation, selectedCity, setSelectedCity}) => {
  console.log("cities?", cities)
  const handleCurrentLocation = () => {
    setCity("");
    getCurrentLocation(); 
    setSelectedCity("current");
  }

const handleCityClick = (city) => {
  setCity(city);
  setSelectedCity(city);
};

  return (
    <div className="button_wrap">
        <Button variant="light" className={selectedCity === "current" ? "current" : ""} onClick={handleCurrentLocation}>
          Current location
        </Button>

        {cities.map((item, index) => (
          <Button variant="light" className={selectedCity === item ? "current" : ""} key = {index} onClick={() => handleCityClick(item)}>
            {item}
          </Button>
        ))}
    </div>
  )
}

export default WeatherButton
