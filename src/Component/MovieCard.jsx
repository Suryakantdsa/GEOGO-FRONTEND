import React from 'react'

const MovieCard = () => {
  return (
    <div className='w-[240px] h-[300px] flex flex-col p-2 m-2 border border-green-500 rounded-md shadow-xl'>
        <img src="https://upload.wikimedia.org/wikipedia/en/9/90/Satyaprem_Ki_Katha_poster.jpg" alt="poster" 
        className='w-full h-[60%] border rounded-md shadow-lg   '/>
        <h1 className='w-full font-bold text-xl text-center mt-2'>Satyaprem Ki Katha</h1>
        <p className='w-full flex justify-between px-4'>
            <span>⭐ 8.6</span>
            <span><i className="fa-regular fa-star text-blue-600"></i></span>
        </p>
        <button className='w-full mt-2 bg-green-200 font-bold text-blue-600'> WishList <i className=" ml-2 fa-solid fa-plus"></i> </button>
        <button className='w-full mt-1'> <i className="fa-solid fa-play mr-2"></i>Trailer</button>

    </div>
  )
}

export default MovieCard