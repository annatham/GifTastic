
// var apiKey = "mvVlsyLAqUJwQYasHF5duopXShyoSo3d";

  // $.ajax({
  //   url: queryURL,
  //   method: "GET"
  // }).then(function(response) {
  //   console.log(queryURL);
  //   console.log(response);
  // });

  // code to append data to page

  var searchResults = ["kittens", "puppies", "funny", "sad", "happy dance"];

  // displayMovieInfo function re-renders the HTML to display the appropriate content
  function displaySearch() {

    var searchID = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=mvVlsyLAqUJwQYasHF5duopXShyoSo3d&tag=" + searchID;

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      // Creating a div to hold the movie
      var searchDiv = $("<div>");

      // Retrieving the URL for the image
      var imgURL = response.data.image_original_url;

      // Creating an element to hold the image
      var image = $("<img>").attr("src", imgURL);

      // Appending the image
      searchDiv.append(image);

      // Putting the entire movie above the previous movies
      $("#search-view").prepend(searchDiv);
    });

  }

  // Function for displaying movie data
  function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#search-history").empty();

    // Looping through the array of movies
    for (var i = 0; i < searchResults.length; i++) {

      // Then dynamicaly generating buttons for each movie in the array
      /* This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>) */
      var a = $("<button>");
      // Adding a class of movie-btn to our button
      a.addClass("search-btn");
      // Adding a data-attribute
      a.attr("data-name", searchResults[i]);
      // Providing the initial button text
      a.text(searchResults[i]);
      // Adding the button to the buttons-view div
      $("#search-history").append(a);
    }
  }
giovie button is clicked
  $("#add-search").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var searchID = $("#search-form").val().trim();

    // Adding movie from the textbox to our array
    searchResults.push(searchID);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });


  // Adding a click event listener to all elements with a class of "movie-btn"
  $(document).on("click", ".search-btn", displaySearch);

  // Calling the renderButtons function to display the intial buttons
  renderButtons();