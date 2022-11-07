'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies did you watch?', '');
    while (
        numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)
        ) {
        numberOfFilms = +prompt('How many movies did you watch?', '');
        
    } 
    return numberOfFilms;
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched quite a few movies.');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('You are classic spectator.');
    } else if (personalMovieDB.count > 30) {
        console.log('You are lover of movies');
    } else {
        console.log("Error.");
    }
}
detectPersonalLevel();

// let count = 0;
// while (count < 2) {
//     const lastMovie = prompt('One of the last watched movies?', '');
//     if (lastMovie == null || lastMovie == undefined) {
//         continue;
//     } else {
//         if (lastMovie.length == 0 || lastMovie.length > 50 || lastMovie == null || lastMovie == undefined) {
//             continue;
//         } else {
//             let flag = true;
//             while (flag == true) {
//                 const rate = prompt('How do you rate it?', '');
//                 if (rate == null) {
//                     continue;
//                 } else {
//                     flag = false;
//                     personalMovieDB.movies[lastMovie] = rate;
//                 }
//             }
//             count++;
//         }
//     }
// }

// for (let i = 0; i < 2; i++) {
//     const lastMovie = prompt('One of the last watched movies?', '');
//     if (lastMovie !== null && lastMovie.length > 0 && lastMovie.length <= 50) {

//         while (true) {
//             const rate = prompt('How do you rate it?', '');
//         if (rate !== null) {
//             personalMovieDB.movies[lastMovie] = rate;
//             break;
//         } else {
//             continue;
//         }
//         }
        
//     } else {
//         i--;
//         continue;
//     }
// }

function rememberMyFilms() {
    let increm = 0;
do {
    const lastMovie = prompt('One of the last watched movies?', '');
    if (lastMovie == null || lastMovie.length == 0 || lastMovie.length > 50) {
        continue;
    } else {
        while (true){
            const rate = prompt('How do you rate it?', '');
            if (rate == null) {
                continue;
            } else {
                personalMovieDB.movies[lastMovie] = rate;
                break;
            }
        }
        increm++;
    }
} while (increm !== 2);
}

rememberMyFilms();

console.log(personalMovieDB.movies);

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let step = 1; step < 4; step++) {
        const question = prompt(`Your favorite movie ${step}`, '');
        personalMovieDB.genres[step] = question;
    }
}
writeYourGenres();

console.log(personalMovieDB.genres);
