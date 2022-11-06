/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = prompt('How many movies did you watch?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: Array,
    privat: false

};

console.log(typeof(personalMovieDB.count));
console.log(typeof(personalMovieDB.movies));
console.log(typeof(personalMovieDB.actors));
console.log(typeof(personalMovieDB.genres));
console.log(typeof(personalMovieDB.privat));

const movies = {};

let step;
for (step = 0; step < 2; step++) {
    const lastMovie = prompt('One of the last watched movies?', '');
    const rate = prompt('How do you rate it?', '');
    movies[lastMovie] = rate;
}

console.log(movies);
