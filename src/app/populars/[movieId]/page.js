import { getMoviesById } from '@/services/movie.service';
import React from 'react'
import {FaStar} from 'react-icons/fa'

const MovicDetails = async({params}) => {
    const getMovieId = await  getMoviesById (params.movieId);
    console.log("Get Movies By ID : " , getMovieId);
    const rating = getMovieId.payload.rating;
    console.log("Rating" , rating);
    let star = [] 
    for(let i = 0; i<Math.ceil(rating/2); i++){
        star.push(i);
    }

  return (
    <div className="bg-gradient-to-r from-rose-950 to-pink-950 overflow-auto pt-20">
     
      <div>
        <div className="py-8">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[600px] rounded-lg  mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src= {getMovieId.payload.image}
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
                  {" "}
                  {getMovieId.payload.director}
                </h2>
                <p className="text-white dark:text-gray-300 text-sm mb-4">
                  {getMovieId.payload.runtime} minutes
                </p>
                <p className="text-white dark:text-gray-300 text-sm mb-4">
                {getMovieId.payload.genre}
                </p>
                <p className="text-white dark:text-gray-300 text-sm mb-4">
              
               <span className="flex">
                  {star.map(e=>(
                    <FaStar className="text-yellow-400 text-3xl mx-1"/>
                  ))}
               </span>
                
                </p>
                <div className="flex mb-4">
                  <div className="mr-4">
                    <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
                      {" "}
                      {getMovieId.payload.movie_title}
                    </h2>
                    <p className="text-white dark:text-gray-300 text-sm mt-2">
                    {getMovieId.payload.description}
                    </p>
                  </div>
                 
                </div>
                <div className="mb-4 text-white">
                <p> {getMovieId.payload.posted_at} </p>
          </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovicDetails