import React, { useEffect, useState } from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {
    const [location, setLocation] = useState('hyderabad')
    const [weather, setWeather] = useState(false)

    const search = async (city) => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_API_KEY}`;

            const response = await fetch(url)
            const data = await response.json()
            setWeather({
                temperature: data.main.temp,
                humidity: data.main.humidity,
                windSpeed: Math.floor(data.wind.speed),
                location = data.name,
            })
            setLocation("")
            console.log(data)
        } catch (error) {
            console.log("Search :: error", error)
        }
    }

    useEffect(() => {
        search("London")
    }, [])
    return (
        <div className="flex gap-2">
            <input
                type="text"
                placeholder="Enter Location..."
                className=" px-4 py-3 text-white text-lg w-[350px] rounded-3xl focus:outline-none shadow-xl backdrop-blur-md border border-white/20 placeholder-white bg-white/10 "
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            />
            <button className="backdrop-blur-md text-white bg-white/10 border border-white/20 w-[55px] h-[55px] p-2 rounded-full text-center cursor-pointer shadow-lg text-xl">
                <FaSearch className="mx-auto" onClick={search} />
            </button>
        </div>
    )
}



export default Search;
