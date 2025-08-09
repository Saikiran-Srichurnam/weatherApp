import React from 'react'
import {
    clear_icon,
    clouds_icon,
    drizzle_icon,
    mist_icon,
    rain_icon,
    snow_icon,
} from '../components/index'

function Temperature() {
    return (
        <div className=" flex flex-col gap-8">
            <span className="mx-auto mt-6">
                <img
                    src={snow_icon}
                    alt="temp img"
                    className='w-[150px] h-[150px]' />
            </span>
            <div className=" -mt-10 text-center mx-auto flex flex-col gap-1">
                <h1
                    className="text-6xl font-semibold"
                >24 C</h1>
                <h2
                    className="text-3xl font-semibold "
                >Hyderabad </h2>
            </div>
        </div>
    )
}

export default Temperature
