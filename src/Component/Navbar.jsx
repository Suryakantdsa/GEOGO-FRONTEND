import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='h-[10%] flex px-1 py-2 md:justify-between justify-center items-center bg-black'>
            <div className='flex items-center'>
            <i className="fa-solid fa-bars text-3xl md:text-4xl ml-2 text-white"></i>
             {/* logo start   */}
             <Link to={"/"}>
             <div className='md:flex items-center border-[2px] mx-4 border-green-300 hidden py-5 h-[2.1rem] '>
                <span className='text-[2rem]  font-bold text-green-600'>MOVIE</span>
                <div className='flex flex-col justify-center px-2 font-bold h-[60%]'>
                    <span className='text-green-400 text-[0.8rem]'>Recommendation</span>
                    <span className='text-green-600 text-[0.8rem]'>App</span>
                </div>
            </div>
             </Link>
            {/* ---------------log end--------------- */}
            </div>
            {/* search bar start */}
            <div id="searchbar" className='h-[2rem] mx-2  md:h-[2.5rem] flex justify-between bg-white w-[80%] md:w-[70%] rounded-l-full rounded-r-full'>
                <input 
                type="text" 
                className='h-full w-[80%] rounded-l-full border-none outline-none'
                />
                <button className=' bg-green-300 w-[10%] rounded-r-full h-full '>
                <span className="bi bi-search"></span>
                </button>
            </div>
            {/* -------------search bar end? ----------- */}
            <div id="wishlist" className='text-white mx-4 hidden md:flex'>
                <Link to={"/wishlist"} > 
                <span className='text-3xl'>WishList</span>
                </Link>
                <span id="boot-icon" className="bi bi-bookmark-plus text-4xl ml-1 text-green-500" ></span>
            </div>
        </nav>
    )
}

export default Navbar