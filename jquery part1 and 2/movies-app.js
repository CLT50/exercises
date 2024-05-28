
let currentId = 0;
let moviesList = [];

$(function() {

  $("form").on("submit", function(e) {
    e.preventDefault();
    let title = $("#movieTitle").val();
    let rating = $("#movieRating").val();

    let movieData = { title, rating, currentId };
    const HTMLtoAppend = createMovieDataHTML(movieData);

    currentId++
    moviesList.push(movieData);

    $(".movieLi").append(HTMLtoAppend);
    $("form").trigger("reset");
  });


  $("container").on("click", ".deleteButton", function(e) {
    
    let indexToRemoveAt = moviesList.findIndex(movie => movie.currentId === +$(e.target).data("deleteId"))
    
    moviesList.splice(indexToRemoveAt, 1)

    $(e.target)
      .("deleteList")
      .remove();
    
  });

  