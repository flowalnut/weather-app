import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div className="button_wrap">
        <Button variant="light" className="current">Current location</Button>
        <Button variant="light">Newyork</Button>
        <Button variant="light">Paris</Button>
        <Button variant="light">Japan</Button>
        <Button variant="light">Light</Button>
    </div>
  )
}

export default WeatherButton
