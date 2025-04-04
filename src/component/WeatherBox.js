import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather)
  return (
    <div className="weather_wrap">
        <div className="weather_left">
            <h2>{weather?.weather[0].description.toUpperCase()}</h2>
            <div className="weather_left_btm">
                <h3>{weather?.name}</h3>
                <p className="degree">{weather?.main.temp}ºC / {(weather?.main.temp*1.8+32).toFixed(1)}ºF</p>
            </div>
        </div>
        <div className="weather_right"><figure><img src="https://hosts.weatheri.co.kr/bearcreek/icon2/w/w_icon_b_01.png" alt="날씨아이콘"></img></figure></div>
    </div>
  )
}

export default WeatherBox
