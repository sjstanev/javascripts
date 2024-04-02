function solve(input) {
    movies = []
    movie = {}

    // Class that create object that contain name of the movie
    class addMovieToObject{
        constructor(param){
            this.name = param
        }
    }

    function isMovieInMovies(movieName){
        // movies is array from objects (movie)
        // moviesIndex is used to track on which object there is match
        moviesIndex = 0;
        for (const key of movies) {
            moviesIndex ++ ;

            if ( Object.values(key).includes(movieName)) {
                return [true, moviesIndex]; 
            }
        }
    }

    // loop through input 
    for (const iterator of input) {

        arrayParts = iterator.split(' ');
        indexCounter = 0;
        //console.log(movies); 
        for (const element of arrayParts) {
            indexCounter++ 
            if (element == "addMovie"){

                arrayParts.shift();
                movie = new addMovieToObject(arrayParts.join(' '))
                movies.push(movie)

            }
            // directedBy 
            else if (element == "directedBy"){

                const movieName = arrayParts.slice(0, indexCounter - 1).join(' ');
                const directorName = arrayParts.slice(indexCounter).join(' ');

                //Object.values(obj).includes("test1");
                // isMovieInMovie return to array from [true, <index for element of movies>]
                check = isMovieInMovies(movieName) 
                if (check) {
                    index = check[1] - 1;
                    // copy object to var than add more property and return it to array
                    results = movies[index]
                    // add property with director (key) and directoryName (value)
                    results.director = directorName; 
                    movies[index] = results;
                }
                
            } 
            // If there onDate
            else if (element == "onDate"){

                const movieName = arrayParts.slice(0, indexCounter - 1).join(' ');
                const movieDate = arrayParts.slice(indexCounter).join(' ');

                //Object.values(obj).includes("test1");
                // isMovieInMovie return to array from [true, <index for element of movies>]
                check = isMovieInMovies(movieName) 
                if (check) {
                    index = check[1] - 1;
                    // copy object to var than add more property and return it to array
                    results = movies[index]
                    // add property with director (key) and directoryName (value)
                    results.date = movieDate; 
                    movies[index] = results;
                }
                
            }            
        }
    }

    for (const movie of movies) {
        // if (Object.keys(movie).length = 3 ){}
        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')){
            result = JSON.stringify(movie);
            console.log(result);
        }
    }
}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])

// solve([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
//     ])