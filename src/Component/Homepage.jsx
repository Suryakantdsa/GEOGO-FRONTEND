import React from 'react';
import MovieCard from './MovieCard';

const Homepage = () => {
    return (
        <div className=' flex flex-col items-center justify-center'>
            <section id='filter-sort' className='px-2 py-2 m-1 flex justify-center'>
                <ul className='flex justify-around min-w-[600px] md:min-w-auto overflow-x-auto md:overflow-hidden'>
                    <li className='bg-red-400 mr-4 font-bold px-2 rounded-md'>All</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Horror</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Action</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Drama</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Romance</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Comedy</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Thriller</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Science Friction</li>
                    <li className='bg-green-100 mr-4 font-bold px-2 rounded-md'>Documentary</li>
                </ul>
                <label htmlFor="sort" className='font-bold text-blue-600 text-lg'>SORT BY</label>
                <select name="sort" id="sort" className='border shadow-lg ml-2'>
                    <option value="4star">list the movies</option>
                    <option value="4star">4⭐ & above</option>
                    <option value="3star">3⭐ & above</option>
                    <option value="2star">2⭐ & above</option>
                    <option value="new">Newest first</option>
                    <option value="new">Oldest first</option>
                </select>
                
            </section>
            <section className='grid gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-x-auto'>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
        </div>
    );
}

export default Homepage;
