'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies did you watch?', '');
        while (
            personalMovieDB.count == null || personalMovieDB.count == '' || 
            isNaN(personalMovieDB.count)
            ) {
                personalMovieDB.count = +prompt('How many movies did you watch?', '');
            
        } 
        return personalMovieDB.count;
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Watched quite a few movies.');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log('You are classic spectator.');
        } else if (personalMovieDB.count > 30) {
            console.log('You are lover of movies');
        } else {
            console.log("Error.");
        }
    },
    rememberMyFilms: function() {
        let increm = 0;
    do {
        const lastMovie = prompt('One of the last watched movies?', '');
        if (lastMovie == null || lastMovie.length == 0 ||
             lastMovie.length > 50) {
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
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let step = 1; step < 4; step++) {
            const question = prompt(`Your favorite movie ${step}`, '');
            if (question == null || question == '') {
                step--;
                continue;
            }
            personalMovieDB.genres[step - 1] = question;
        }
        personalMovieDB.genres.forEach((element, index) => { 
            console.log(`Favorite movie ${index + 1} is ${element}`);
        });
    }
};

