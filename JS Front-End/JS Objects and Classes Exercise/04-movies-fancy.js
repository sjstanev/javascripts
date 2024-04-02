function solve(input) {

    //declare const
    const movies = [];
    const addMovieCommand = "addMovie";
    const directedByCommand = "directedBy";
    const onDateCommand = "onDate";

    for (const line of input) {

        // do a checks
        // find whether a addMovieCommand is substring of line
        if(line.includes(addMovieCommand)){
            
            // find movie name by splitting the sentence using substring
            const movieName = line.substring(addMovieCommand.length + 1)
            // create object movie
            const movie = {
                name: movieName
            }

            movies.push(movie)
        } else if(line.includes(directedByCommand)){
            const [movieName, director] = line.split(` ${directedByCommand} `);
            // if there is match, take reference to this object
            const movie = movies.find(movie => movieName == movie.name)
            // add property director
            if (movie){
                movie.director = director;
            }

        } else if(line.includes(onDateCommand)){
            const [movieName, date] = line.split(` ${onDateCommand} `);
            // if there is match, take reference to this object
            const movie = movies.find(movie => movieName == movie.name)
            // add another property to movie (object)
            if (movie){
                movie.date = date;
            }
        }
    }
    
    movies
        .filter(movie => Object.keys(movie).length  > 2)
        .forEach(movie => {
            console.log(JSON.stringify(movie))
        });

    // print result

}

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ])
