import React, { useEffect, useState } from 'react'
import {
  clear_icon,
  clouds_icon,
  drizzle_icon,
  mist_icon,
  rain_icon,
  snow_icon,
  ShowTemperature,
  HumidityAndWindSpeed,
  SearchBar,
  Error
} from './components/index'

function App() {

  const [weather, setWeather] = useState(null)
  const [location, setLocation] = useState("")
  const [error, setError] = useState("")

  const allIcons = {
    '01d': clear_icon,
    '01n': clear_icon,
    '02d': clouds_icon,
    '02n': clouds_icon,
    '03d': clouds_icon,
    '03n': clouds_icon,
    '04d': drizzle_icon,
    '04n': drizzle_icon,
    '09d': rain_icon,
    '09n': rain_icon,
    '10d': rain_icon,
    '10n': rain_icon,
    '13d': snow_icon,
    '13n': snow_icon,
    '50d': mist_icon,
    '50n': mist_icon,
  }

  const search = async (city) => {
    setWeather(null)
    setError("")

    if (!city?.trim()) {
      setError("Enter a Valid Locaton..."); // clear previous results, if any
      return;
    }

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

      const response = await fetch(url)
      const data = await response.json()
      const icon = allIcons[data.weather[0].icon] || clear_icon;

      if (data.cod !== 200) {
        setError("No data found for this location...")
        return
      }

      setWeather({
        temperature: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        location: data.name,
        icon: icon
      })
      console.log(data)
    } catch (error) {
      console.log("Search :: error", error)
      setError("Something went wrong. Please try again.");
    }
  }


  return (
    <>
      <div className='text-white w-full  h-screen bg-yellow-100'>
        <div className="mx-auto py-10 max-w-lg ">
          <div className="p-10 flex-wrap flex justify-center items-center w-full  bg-gradient-to-r from-yellow-300  to-orange-500   rounded-3xl shadow-lg shadow-black max-w-[460px] ">

            {/* Search Component */}
            <SearchBar
              location={location}
              setLocation={setLocation}
              setError={setError}
              search={search}
            />

            {/* All Weather Data */}
            {weather && weather.location ? (
              <div className="flex flex-col justify-center items-center mx-auto">

                {/* ShowTemperature and HumidityAndWindSpeed Component  */}
                <ShowTemperature weather={weather} />
                <HumidityAndWindSpeed weather={weather} />
              </div>
            ) : (<Error error={error} />)}
          </div>
        </div>
      </div >
    </>
  )
}

export default App
