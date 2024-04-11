import React from "react";

import Image from "next/image";
import img from '../../public/images/background.webp'

import { getAllMovies, getByGenreMovies } from "@/services/movie.service";
import CardCom from "@/components/Card";


export default async function Home() {
  const movies = await getAllMovies();
  const payloadFilter = [...new Set(movies.payload.map((m) => m.genre))];
  return (
    <>
      <div>
        <Image src={img} className="relative object-cover object-center inset-0 w-full h-screen -z-30"></Image>
        <div className='absolute bg-opacity-50  filter -inset-y-1/2 inset-x-0 bg-rose-950 -z-10'></div>
        
        <div className='bg-gradient-to-r from-rose-950 to-pink-950 h-auto w-full relative mb-10'>  
          <h2 className="text-white text-lg font-bold px-8 ml-10 py-5"> All Movie<span className='space-x-28'> {" > "} </span></h2>
          <CardCom movieData={movies}/>
              {payloadFilter.map(async (dataToMap)=>{
              const mapToGetGenre = await getByGenreMovies(dataToMap)
              return(
                <div>
                    <h2 className="text-white text-lg font-bold px-8 ml-10 py-5">{`${dataToMap} Movie`} <span className='space-x-28'> {" > "} </span></h2>
                    <CardCom movieData={mapToGetGenre}/>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
