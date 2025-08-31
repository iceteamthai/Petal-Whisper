import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <>
            <Link to={`/card_detail/${props.id}`} className="block h-full">
                <div className='flex flex-col h-full rounded-md overflow-hidden shadow-lg bg-gray-150 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer'>
                    <img className='w-full h-60 object-cover' src={props.imageUrl} alt={props.title} />
                    <div className='flex flex-col flex-grow px-6 py-4'>
                        <h2 className='font-bold text-xl mb-2'>{props.title}</h2>
                        <p className='text-gray-700 text-base'>
                            {props.description}
                        </p>
                        <h2 className='font-bold text-xl mb-2'>{props.price}</h2>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card