import { Movie } from "@/TypescriptProps";
import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

const getData= async (id:string)=>{
    const url = await  fetch(`https://api.themoviedb.org/3/movie/${id}`,{
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.THEMOVIEDB_API_KEY as string
        }
      });
      return url.json()
}


export default async function MovieItem({params,children}:{children:ReactNode,params:{id:string}}){
    let data:Movie = await getData(params.id)
return(
    <div className="min-h-screen p-10 mt-16">
    <div className="h-[40vh] relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        alt="Image of movie"
        className="object-cover w-full rounded-lg"
        fill
      />
    </div>

    <h1 className="text-4xl font-bold text-center pt-5">{data.title}</h1>

    <div className="flex gap-x-10 mt-10">
      <div className="w-1/2 font-medium ">
        <h1>
          <span className="underline">Homepage:</span>{" "}
          <Link href={data.homepage} target="_blank">
            Link
          </Link>
        </h1>

        <h1>
          <span className="underline">Original Lanugage:</span>{" "}
          {data.original_language}
        </h1>

        <p>
          <span className="underline">Overview:</span> {data.overview}
        </p>

        <p>
          <span className="underline">Release Date:</span> {data.release_date}
        </p>
      </div>
      <div className="w-1/2 font-medium">
{children}
      </div>
     
    </div>
  </div>
)

}