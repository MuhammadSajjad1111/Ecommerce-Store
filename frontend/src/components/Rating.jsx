import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa'

function Rating({ value, text }) {
    return (
        <div className='flex space-x-1'>
            <span className=' text-yellow-500 mt-1'>
                {value > 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            <span className=' text-yellow-500 mt-1'>
                {value > 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            <span className=' text-yellow-500 mt-1'>
                {value > 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            <span className=' text-yellow-500 mt-1'>
                {value > 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            <span className=' text-yellow-500 mt-1'>
                {value > 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
            </span>

            <span className=''>
                {text && text}
            </span>

        </div>
    )
}

export default Rating;