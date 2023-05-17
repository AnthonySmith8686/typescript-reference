var stringTest = 'hello';
var movieTitle = 'Matrix';
movieTitle = 'John Wick';
var myNumber = 69;
var myBoolean = true;
// Type inferance. Typescript will automatically add the type to a variable that doesn't have it implicitly added e.g
var tvShow = 'Cooking with Dave';
tvShow = false;
// error changing it to false
// any type
var thing = 'string';
thing = 99;
thing = false;
thing();
thing.toUppercase();
var setMovie;
var movies = ['shrek', 'godfather', 'enter the dragon'];
movies.forEach(function (movie) {
    if (movie === 'shrek') {
        setMovie = 'shrek';
    }
});
// setMovie is currently defaulted as 'any' type. it should really be set as 'let setMovie: string'. You need to prevent the implicit 'any'.
