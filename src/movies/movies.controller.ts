import { Controller, Get } from '@nestjs/common';

import { MoviesService } from './movies.service';
import { Movies } from './movies';


@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

  @Get("/movies")
  getMovies(): Promise<Movies[]> {
     
    return this.moviesService.getMovies();

  }


}
