// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let director = movies.map((element) => {
    return element.director
  })
  return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let drama = movies.filter((element) => element.director === 'Steven Spielberg' && element.genre.includes('Drama'));
  return drama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length == 0){
    return 0
  }
  let average = movies.reduce ((sum, element) => {
    if (element.length === 0){
      return sum;
    }
    if (!element.score) {
      return sum;

    }else {
      return sum + element.score;
    }
  }, 0);
  
  return Number((average / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies){
  let dramaScore = movies.filter((element)  => {
    if (!movies.length) {
      return 0;
    } else {
      return element.genre.includes('Drama');
    }
  });
  if (dramaScore.length === 0) {
    return 0;
  } 
  let finalscore = dramaScore.reduce((sum, element) => {
    if (!element.score){
      return sum;

    } else {
      return sum + element.score;
    }
  }, 0);
  return Number((finalscore / dramaScore.length).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let colone = JSON.parse( JSON.stringify(movies) )

  colone.sort ((first, second) =>{
    if (first.year > second.year) {
      return 1
    }
    else if (first.year < second.year) {
      return -1
    }
    else {
      if (first.title > second.title){
        return 1
      }
      else if (first.title < second.title){
        return -1
      }
      else {
        return 0
      }
      
    }
  })
  return colone
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(titles) {
  let colone = JSON.parse( JSON.stringify(titles) )

  colone.sort ((first, second) =>{
    if (first.title > second.title) {
      return 1
    }
    else if (first.title < second.title) {
      return -1
    }
    else {
      return 0
    }
    
  });
  let moviesTitle = colone.map((movies) => {
    return movies.title;
  }); 

  if (moviesTitle.length > 20) {
    let first20Titles = moviesTitle.slice(0, 20);
    return first20Titles;
}
return moviesTitle;

  

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
