const { response, request } = require("express");
const Movie = require("../models/movie");

const moviesList = [];

const getAllMovies = (req = request, res = response) => {
  const { searchTerm, orderBy } = req.query;

  Movie.find({ title: RegExp(searchTerm)}).then(
    (result) => {
      res.status(200).json({
        moviesList : result
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        response: "There are no movies found!"
      })
    }
  );


  // let response = moviesList

  // if(searchTerm){
  //   response = response.filter( movie => movie.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) );
  // }

  // if(orderBy === "alpha"){
  //   sortMovies();
  // }

  // res.status(200).json({
  //     moviesList : response
  // });
}

const getMovie = ( req = request, res = response ) => {
  const reqId = req.params.id;

  let idx = moviesList.findIndex(movie => movie.id == reqId);

  if(idx === -1){
      res.status(400).json({
          result : "There is no movie with that ID",
      })
  } else {
      res.status(200).json({
          result: moviesList[idx]
      })
  }
}

const createMovie = ( req = request, res = response ) => {
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count
  } = req.body;

  if( !backdrop_path || !genre_ids || !id || !original_language || !original_title || !overview || !popularity || !poster_path || !release_date || !title || !vote_average || !vote_count){
    res.status(400).json({
      msg : "Invalid Data",
    });
    return;
  }


  moviesList.push({
    adult,
    backdrop_path,
    genre_ids,
    id, //Insertion Id at the end of the array
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count
  });

  res.status(200).json({
    resp : "Movie Created Successfully",
  });
  return;
}

const updateMovie = ( req = request, res = result ) => {
  const reqId = req.params.id;

  let idx = moviesList.findIndex(movie => movie.id == reqId);

  if(idx === -1){
    res.status(400).json({
        result : "There is no movie with that ID",
    });
    return;
  }
  
  const {
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count
  } = req.body;

  moviesList[idx].adult = adult;
  moviesList[idx].backdrop_path = backdrop_path;
  moviesList[idx].genre_ids = genre_ids;
  moviesList[idx].id = id;
  moviesList[idx].original_language = original_language;
  moviesList[idx].original_title = original_title;
  moviesList[idx].overview = overview;
  moviesList[idx].popularity = popularity;
  moviesList[idx].poster_path = poster_path;
  moviesList[idx].release_date = release_date;
  moviesList[idx].title = title;
  moviesList[idx].video = video;
  moviesList[idx].vote_average = vote_average;
  moviesList[idx].vote_count = vote_count;

  res.status(200).json({
    modifiedItem : moviesList[idx]
});
}

const deleteMovie = ( req = request, res = result ) => {
  const reqId = req.params.id;

  let idx = moviesList.findIndex(movie => movie.id == reqId);

  if(idx === -1){
    res.status(400).json({
        result : "There is no movie with that ID",
    });
    return;
  }
  
  //Remove 1 element at idx position
  moviesList.splice(idx, 1);

  res.status(200).json({
    result : moviesList,
});
}

module.exports = { getAllMovies, getMovie, createMovie, updateMovie, deleteMovie };

function sortMovies() {
  moviesList.sort((a, b) => {
    const titleA = a.original_title.toLowerCase();
    const titleB = b.original_title.toLowerCase();
  
    if (titleA < titleB) {
      return -1;
    }
  
    if (titleA > titleB) {
      return 1;
    }
  
    return 0;
  });
}