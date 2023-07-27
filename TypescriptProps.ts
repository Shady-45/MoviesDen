export  type Trending={
    results:{
        id:number,
        title:string,
        overview:string,
        poster_path:string
    }[]
}
export interface Movie {
    title: string;
    homepage: string;
    original_language: string;
    overview: string;
    release_date: string;
    backdrop_path: string;
  }
  export type NowPlaying = {
    results:{
        id:number,
        poster_path:string,
        overview:string,
        original_title:string

    }[]
  }