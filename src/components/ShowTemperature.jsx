import React from 'react'


function ShowTemperature({ weather }) {
    return (
        <div className=" flex flex-col gap-8">
            <span className="mx-auto mt-6">
                <img
                    src={weather.icon}
                    alt="temp img"
                    className='w-[150px] h-[150px]' />
            </span>
            <div className=" -mt-10 text-center mx-auto flex flex-col gap-1">
                <h1
                    className="text-6xl font-semibold"
                >{weather.temperature}°C</h1>
                <h2
                    className="text-3xl font-semibold "
                >{weather.location}</h2>
            </div>
        </div>
    )
}

export default ShowTemperature
