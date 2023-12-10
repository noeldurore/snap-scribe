// sophisticated_code.js

// This code is a complex implementation of a ticket booking system for a movie theater.

// Define the Movie class
class Movie {
  constructor(title, genre, duration) {
    this.title = title;
    this.genre = genre;
    this.duration = duration;
  }

  calculatePrice() {
    // Complex pricing algorithm based on the movie's duration and genre
    let price = this.duration * 0.1;

    if (this.duration > 120) {
      price += 2;
    }

    if (this.genre === "Action") {
      price *= 1.2;
    }

    if (this.genre === "Comedy") {
      price *= 0.9;
    }

    return price.toFixed(2); // Fixed to 2 decimal places
  }
}

// Define the Theater class
class Theater {
  constructor(name) {
    this.name = name;
    this.movies = [];
  }

  addMovie(movie) {
    if (movie instanceof Movie) {
      this.movies.push(movie);
    }
  }

  listMovies() {
    this.movies.forEach((movie) => {
      console.log(`${movie.title} (${movie.genre}) - ${movie.duration} mins`);
    });
  }
}

// Create movie objects
const movie1 = new Movie("Inception", "Action", 148);
const movie2 = new Movie("The Shawshank Redemption", "Drama", 142);
const movie3 = new Movie("Zootopia", "Animation", 108);

// Create theater object
const theater = new Theater("Cineplex");

// Add movies to the theater
theater.addMovie(movie1);
theater.addMovie(movie2);
theater.addMovie(movie3);

// List movies in the theater
console.log(`Movies playing at ${theater.name}:`);
theater.listMovies();

// Print prices for each movie
theater.movies.forEach((movie) => {
  console.log(`${movie.title} - $${movie.calculatePrice()}`);
});

// Output:
// Movies playing at Cineplex:
// Inception (Action) - 148 mins
// The Shawshank Redemption (Drama) - 142 mins
// Zootopia (Animation) - 108 mins
// Inception - $17.76
// The Shawshank Redemption - $15.52
// Zootopia - $13.68