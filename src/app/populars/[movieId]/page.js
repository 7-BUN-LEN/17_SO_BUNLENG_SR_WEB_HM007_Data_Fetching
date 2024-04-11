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


    const postedAt = getMovieId.payload.posted_at;
    const postedDate = new Date(postedAt);
    const format = `${postedDate.toDateString()} ${postedDate.toLocaleTimeString()}`
  return (
    <div className="bg-gradient-to-r h-screen from-rose-950 to-pink-950 overflow-auto pt-20">
      <div>
        <div className="py-8">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="md:flex-1 px-4">
                <div className="h-[600px] rounded-lg  mb-4">
                  <img
                    src= {getMovieId.payload.image == "" ? "https://m.ykimg.com/05350000649264B71427220BB938EDB4":getMovieId.payload.image}
                    alt="Product Image"
                  />
                </div>
              </div>
              <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-white dark:text-white mb-2">
                  {" "}
                  {getMovieId.payload.director}
                </h2>
                <p className="text-white dark:text-gray-300 text-sm">
                  {getMovieId.payload.runtime} minutes
                </p>
                <i className="text-white dark:text-gray-300 text-sm mb-4">
                  {getMovieId.payload.genre}
                </i>
                <p className="text-white dark:text-gray-300 text-sm mb-5">
                  <span className="flex">
                      {star.map(e=>(
                        <FaStar className="text-yellow-400 text-xl"/>
                      ))}
                  </span>
                </p>
                <div className="flex mb-4">
                  <div className="mr-4 mt-5">
                    <h2 className="text-2xl font-bold text-white dark:text-white mb-5">
                      {" "}
                      {getMovieId.payload.movie_title}
                    </h2>
                    <p className="text-white dark:text-gray-300 text-sm mt-2 mb-5">
                      {getMovieId.payload.description}
                    </p>
                  </div>
                </div>
                <div className="mb-4 text-white mt-5">
                  <p> {format} </p>
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