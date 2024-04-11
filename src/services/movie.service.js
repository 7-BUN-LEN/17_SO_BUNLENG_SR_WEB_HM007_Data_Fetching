// Get All Movie

export const getAllMovies = async () =>
{
    const res = await fetch('https://movie-api-get-only-bmc3.vercel.app/api',{cache:"no-store"})
    const data = await res.json();
    return data;
}

export const getByGenreMovies = async(genre) =>{
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api?genre=${genre}`,{cache:"no-store"})
    const data = await res.json();
    return data;
}


export async function getMoviesById(id){
    const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api/${id}`,{cache:"no-store"});
    const data = res.json();
    console.log("Id : " , id);
    return data;
}
