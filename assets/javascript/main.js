// my array of tv shows
// var topics = ["Breaking Bad","The Simpsons","The League","The Office","Parks and Recreation","Rick and Morty","Family Guy","Silicon Valley","Malcolm in the Middle"];
// $(document).ready(function () {
  window.onload = function () {

  var topics = [];
  
  $("button").on("click", function () {
  var displayTopicsInfo = function () { }
    var name = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      name + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function (response) {
        var results = response.data;
        for (var i = 0; i < results.length; i++) {

          var gifDiv = $("<div class='item'>");
          gifDiv.addClass("gifDiv");
          // pulling rating of gif
          // var rating = results[i].rating;
          var rating = $("<p>").text("Rating: " + results[i].rating);
          gifDiv.append(rating);
          // pulling gif
          var nameImage = $("<img>");
          nameImage.attr("src", results[i].images.fixed_height_small_still.url);
          nameImage.attr("data-still", results[i].images.fixed_height_small_still.url);
          nameImage.attr("data-animate", results[i].images.fixed_height_small.url);
          nameImage.attr("data-state", "still");
          nameImage.addClass("image");
          gifDiv.prepend(nameImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }

        
        // ========================================================
        function renderButtons() {
          // (this is necessary otherwise you will have repeat buttons)
          $("#gifButtonDisplay").empty();
          // Looping through the array of movies
          for (var i = 0; i < topics.length; i++) {
            var a = $("<button class='btn btn-primary'>");
            a.addClass("item");
            // Adding a data-attribute
            a.attr("data-name", topics[i]);
            // Providing the initial button text
            a.text(topics[i]);
            // Adding the button to the buttons-view div
            $("#gifButtonDisplay").append(a);
          }
        }
        $(document).on("click", "#addGif", function (event) {
          event.preventDefault();
          var name = $("#tvshow-input").val().trim();
          topics.push(name);
          console.log(topics);
          $("#tvshow-input").val("");
          renderButtons();
        });
        

        $(document).on("click", ".item", displayTopicsInfo);

        renderButtons();


        // ========================================================

        
        $(".image").on("click", function () {
          var state = $(this).attr('data-state');
          if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
          } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
          }
          
        });
      });
  });
};


