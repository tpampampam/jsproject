/* eslint-disable prefer-const */
/* eslint-disable no-console */

"use strict";

const numberOfFilms = +prompt('How many movies have you watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last wathed your movie?', ''),
      b = prompt('How would you rate it?', ''),
      c = prompt('One of the last wathed your movie?', ''),
      d = prompt('How would you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);