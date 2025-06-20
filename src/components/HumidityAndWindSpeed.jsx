import React from 'react'
import { wind_icon, humidity_icon } from './index'

function HumidityAndWindSpeed({ weather }) {
    return (
        <>
            <div className="mt-10 flex gap-20">
                <div className="flex gap-2">
                    <span className="flex justify-center items-center">
                        <img src={humidity_icon} alt="Hum" className='w-[45px] h-[45px]' />
                    </span>
                    <div className="text-xl">
                        <h3>{weather.humidity} %</h3>
                        <h3>Humidity</h3>
                    </div>
                </div>

                <div className="flex gap-2">
                    <span className="flex justify-center items-center">
                        <img src={wind_icon} alt="wind" className='w-[50px] h-[50px]' />
                    </span>
                    <div className="text-xl">
                        <h3>{weather.windSpeed} km/h</h3>
                        <h3>wind speed</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HumidityAndWindSpeed
