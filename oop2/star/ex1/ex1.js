// Create a Movie Class.
// The class should have the following attributes:
// title, director. and a toString method that will return a string of the movie title + director.
// Create 2 movie instances.
// Calls their toString method.



class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
    }
    toString() {
        return this.title + " " +this.director;
        console.log(this.title + " " +this.director)

    }
}


let matrix = new Movie("matrix", "Lana Wachowski");
let begale = new Movie("חכמת הבייגלה","אילן הייטר");

matrix.toString();


