//'use strict';
(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var letters = "";
            var finallGenreName = '';
            letters = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
            finallGenreName = letters.toUpperCase();
            return finallGenreName;
        };

    }
    var genre = new Genre('Action');
    var genre1 = new Genre('Drama');
    var genre2 = new Genre('Komedija');
    var genre3 = new Genre('Triler');
    console.log(genre.getData());
    //console.log(genre);

    function Movie(title, genre, length) {

        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getMovieData = function () {
            var newMovieData = "";
            newMovieData = this.title + ',' + this.length + ',' + genre.getData();
            return newMovieData;
        }
    }

    var movie1 = new Movie('Titanic', genre, 120);
    var movie2 = new Movie('Rambo', genre1, 140 );
    var movie3 = new Movie('Roki', genre3, 160);
    var movie4 = new Movie('Ubica mekog srca', genre2, 160);

    console.log(movie1.getMovieData());
    console.log(movie2.getMovieData());



    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.totalNumberOfMovies = 0;

        this.addMovie = function (movie) {
            this.listOfMovies.push(movie);
            this.totalNumberOfMovies++;

        }

        this.getData = function () {
            var allDataOfProgram = "";
            // program --> listu filmova 
            // lista filmova je this.listOfMovies
            allDataOfProgram += this.date + "\n";
            for (var i = 0; i < this.listOfMovies.length; i++) {
                allDataOfProgram += this.listOfMovies[i].getMovieData() + "\n";

            }
            return allDataOfProgram;
        }

    }
    //  allDataOfProgram.getData();



    var letnjiProgram = new Program('2018/11/22');
    var zimskiProgram = new Program('2018/12/22');
    var prolecniProgram = new Program('2018/11/19');

    letnjiProgram.addMovie(movie1);
    letnjiProgram.addMovie(movie2);
    zimskiProgram.addMovie(movie3);
    zimskiProgram.addMovie(movie4);
    prolecniProgram.addMovie(movie3);
    console.log(letnjiProgram.listOfMovies);
    console.log(letnjiProgram.totalNumberOfMovies);
    console.log(letnjiProgram.getData());

    function Festival(nameOfFestival) {
        this.nameOfFestival = nameOfFestival;
        this.numberOfMoviesInAllPrograms = 0;
        this.listOfProgram = [];

        this.addProgram = function (program) {
            this.listOfProgram.push(program);
            this.numberOfMoviesInAllPrograms += program.totalNumberOfMovies;
            return listOfProgram;
        }
        this.getDataToFestival = function () {
            var festivalData = "";
            for (var i = 0; i < this.listOfProgram.length; i++) {
                festivalData += this.nameOfFestival + " has " + this.numberOfMoviesInAllPrograms + " movie titles " + "\n" + this.listOfProgram[i].getData();

            }
            return festivalData;
        }
            
    }
    var letnjiFestival = new Festival('Rivers');
    letnjiFestival.addProgram(letnjiProgram);
    letnjiFestival.addProgram(zimskiProgram);
     console.log(letnjiFestival.listOfProgram);
})()