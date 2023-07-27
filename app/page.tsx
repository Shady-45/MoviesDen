

import { Trending } from "@/TypescriptProps";
import Image from "next/image";
import Link from "next/link";





const getData =async () => {

  const input = await fetch('https://api.themoviedb.org/3/trending/movie/day',{
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.THEMOVIEDB_API_KEY as string
  },
  next:{
    revalidate:10
  }
  });

  return input.json()
}
export default async function Home() {

  /* const scrollLeft = ()=>{
    document.getElementById("carousel")!.scrollLeft -=400
    console.log('pressed');
    
  }
  const scrollRight = ()=>{
    document.getElementById("carousel")!.scrollLeft +=400
  } */
  const data:Trending= await getData()
  
  
  return(
   <>
    
<h1 className="mt-16 text-center text-3xl font-bold text-gray-800  md:mb-6 lg:text-3xl">Top <span className="text-orange-600">Trending</span> Movies</h1>
<div >

<div  id="carousel" className="grid p-16 justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {
  data.results.map((movie)=>{
    return(
      <article className=" flex flex-col overflow-hidden rounded-lg border shadow-lg bg-white gap-4"  key={movie.id} >
        
        <Link href={`/movie/${movie.id}`} className="group relative block h-48  overflow-hidden bg-gray-100 md:h-64">
        <Image className=" absolute  inset-0 h-full w-full object-cover object-center transition duration-100 group-hover:scale-110 " src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} height={500} width={500} alt={movie.title}  />
        </Link>
        <div className="flex flex-col items p-4 sm:p-6 flex-1">
                <span className="text-black  font-extrabold transition-colors duration-75 hover:text-orange-600 " >
                  <Link
                    href={`/movie/${movie.id}`}
                    className="w-full"
                  >
                    {movie.title}
                  </Link>
                </span>

                <p className="text-gray-500 line-clamp-3">{movie.overview}</p>
              </div>
      </article>
    )
  })
}
          </div>
     
  
        </div>

  <section>
  
  </section>


   </>
  )
}
