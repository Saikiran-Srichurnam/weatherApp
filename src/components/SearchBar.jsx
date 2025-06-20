import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBar({ location, setError, setLocation, search }) {
    return (
        <div className="flex gap-3">
            <input
                value={location}
                onChange={e => {
                    setLocation(e.target.value)
                    setError("")
                }}
                type="text"
                placeholder="Enter Location..."
                className=" px-4 py-3 text-white text-xl font-medium w-[320px] rounded-3xl focus:outline-none shadow-xl backdrop-blur-md border border-white/20 placeholder-white bg-white/10 "
            />
            <button className="mr-6 backdrop-blur-md text-white bg-white/10 border border-white/20 p-4  rounded-full text-center cursor-pointer shadow-lg text-xl"
                onClick={() => search(location)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        search(location);
                    }
                }}>
                <FaSearch className="mx-auto" />
            </button>
        </div>

    )
}

export default SearchBar
