
// var apiKey = "mvVlsyLAqUJwQYasHF5duopXShyoSo3d";


  var searchResults = ["kittens", "puppies", "funny", "sad", "happy dance"];

  // displaySearch function renders the HTML to display content
  function displaySearch() {

    var searchID = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=mvVlsyLAqUJwQYasHF5duopXShyoSo3d&tag=" + searchID;

    // Creating an AJAX call

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

      // adding image above last image
      $("#search-view").prepend(searchDiv);
    });

  }

  // Function for displaying buttons
  function renderButtons() {

    // necessary to not have repeat buttons
    $("#search-history").empty();

    // Looping through the array
    for (var i = 0; i < searchResults.length; i++) {

      // creating result button
      var a = $("<button>");

      a.addClass("search-btn");
      
      a.attr("data-name", searchResults[i]);

      // give button text
      a.text(searchResults[i]);

      // Adding the button to the list
      $("#search-history").append(a);
    }
  }

  // search results is rendered into button
  $("#add-search").on("click", function(event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var searchID = $("#search-form").val().trim();

    // Adding to array
    searchResults.push(searchID);

    renderButtons();
  });


  //click event
  $(document).on("click", ".search-btn", displaySearch);

  renderButtons();