import React from 'react'
import Link from 'next/link'

import {
    Carousel,
    CarouselContent,
    CarouselItem
  } from "@/components/ui/carousel";

async function CardCom({movieData}) {
    return (
        <Carousel
           opts={{
           align: "start",
           }}
           className="w-full">
           <CarouselContent className=" md:basis-1/4 lg:basis-1/4 px-10 py-0">
           
           {movieData.payload.map((items)=>(
              <CarouselItem key={items.movie_id} className="md:basis-1/4 lg:basis-1/4">
                 <div className="p-3 px-8 py-0">
                    <div className="p-4 w-[380px] bg-white rounded-lg " key={items.movie_id}>
                        <Link href={`/populars/${items.movie_id}`}>
                           <img src= {items.image==""?" https://m.ykimg.com/05350000649264B71427220BB938EDB4":items.image} class="shadow border" alt={items.movie_title}/>
                        </Link>
                        <div class="mt-4">
                              <h4 class="font-bold text-xl line-clamp-1"> {items.movie_title} </h4>
                              <p class="mt-2 text-gray-600 line-clamp-2"> {items.description}
                              </p>
                        </div>
                    </div>
                 </div>
              </CarouselItem>
           ))}
           </CarouselContent>
        </Carousel>
      )
}
export default CardCom;