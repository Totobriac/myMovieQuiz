import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http'

@Injectable ({
    providedIn:"root"
})

export class SearchMovie {

    constructor(private http: HttpClient) {}

    searchMovie(movie: any) {        
        const headers =  {'x-rapidapi-key': '3c90722e1fmshd3624c65becfb47p1d49a9jsn722fc9909dc4',
                          'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com'}
        
        return this.http.get('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/' + movie.movieSearch , {headers})
    } 
}