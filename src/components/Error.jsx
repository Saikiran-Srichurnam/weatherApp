import React from 'react'

function Error({ error }) {
    return (
        error && (
            <div className='mt-10 bg-red-600 text-white w-full px-2 py-3 rounded-lg text-center shadow-md shadow-black'>
                <p>{error}</p>
            </div>
        )
    )
}

export default Error
