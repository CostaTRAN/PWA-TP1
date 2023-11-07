import { Injectable } from '@nestjs/common';
import { Movies } from './movies';

@Injectable()
export class MoviesService {

    async getMovies(): Promise<Movies[]> {
        const reponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing`,  {headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTY3OTRlMDU1ZjRiMDA0OWVkYjAwNzYwNmU3YTJiMCIsInN1YiI6IjY1NGE1MDM3MWFjMjkyN2IyZjI3MjgxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zh5RQtn5g1oHuAfOyZmiNqBgPdAp5MWxY3jYPoJdjqM"}});

        const films = await reponse.json();
        return films.results;

      }

       /*getMovies(): Promise<Movies[]> {
        const reponse = await fetch("https://api.themoviedb.org/3/movie/now_playing");
        const films = await reponse.json();
        return films.results;
        
      }*/


    /*getMovieDetails(id: string): Promise<Movies> {
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e6b6e4b0e4c5c0f7c2b0f2f9d8b4f8e&language=en-US`)
        .then(response => response.json())
        .then(data => data);
    }*/
}
