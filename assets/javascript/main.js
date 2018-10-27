// my array of tv shows
// var topics = ["Breaking Bad","The Simpsons","The League","The Office","Parks and Recreation","Rick and Morty","Family Guy","Silicon Valley","Malcolm in the Middle"];
$(document).ready(function() {
var topics = [];

    function displayTopicsInfo() {}
    $("button").on("click", function() {
        var name = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          name + "&api_key=dc6zaTOxFJmzC&limit=10";
  
        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {
            var results = response.data;
            for (var i=0; i < results.length; i++){
	
	            var gifDiv = $("<div class='item'>");
	            gifDiv.addClass("gifDiv");
	            // pulling rating of gif
	            // var rating = results[i].rating;
                var rating = $("<p>").text("Rating: " + results[i].rating);
	            gifDiv.append(rating);
	            // pulling gif
	            var nameImage = $("<img>");
	            nameImage.attr("src", results[i].images.fixed_height_small_still.url); 
	            nameImage.attr("data-still",results[i].images.fixed_height_small_still.url); 
	            nameImage.attr("data-animate",results[i].images.fixed_height_small.url); 
	            nameImage.attr("data-state", "still"); 
	            nameImage.addClass("image");
	            gifDiv.prepend(nameImage);
	            
	            $("#gifs-appear-here").prepend(gifDiv);
            }
            // $("#addGif").on("click", function(event) {
      
            //     event.preventDefault();
             
            //     var newShow = $("#tvshow-input").val().trim();
          
            //     names.push(newShow);
              //   // calling renderButtons which handles the processing of our movie array
            //     renderButtons();
            //     return false;
            // })
        
          //Function iterates through topics array to display button with array values in "myButtons" section of HTML
            
        
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
            $("#addGif").on("click", function(event) {
                event.preventDefault();
                var name = $("#tvshow-input").val().trim();
                topics.push(name);
                renderButtons();
                console.log(topics);
                $("#tvshow-input").val("");
                displayButtons();
            
            function displayButtons() {
                $("#gifButtonDisplay").empty();
                for (var i = 0; i < topics.length; i++) {
                  var a = $('<button class="btn btn-primary">');
                  a.addClass("item")
                  // a.attr("id", "show");
                  a.attr("data-name", topics[i]);
                  a.text(topics[i]);
                  $("#gifButtonDisplay").append(a);
                }
              }
            });

          
              $(document).on("click", ".item", displayTopicsInfo);
              
              renderButtons();

          
            // ========================================================
        
            // This calls the renderButtons() function
            // renderButtons();
        

            // $(document).on("click", ".tvshow", displayGifs);
            // $(document).on("click", ".image", function(){
            //     var state = $(this).attr('data-state');
            //     if ( state == 'still'){
            //         $(this).attr('src', $(this).data('animate'));
            //         $(this).attr('data-state', 'animate');
            //     }else{
            //         $(this).attr('src', $(this).data('still'));
            //         $(this).attr('data-state', 'still');
            //     }
        
            // for (var i = 0; i < results.length; i++) {
            //   var gifDiv = $("<div class='item'>");
  
            //   var rating = results[i].rating;
  
            //   var p = $("<p>").text("Rating: " + rating);
  
            //   var nameImage = $("<img>");
            //   nameImage.attr("src", results[i].images.fixed_height.url);
  
            //   gifDiv.prepend(p);
            //   gifDiv.prepend(nameImage);
  
            //   $("#gifs-appear-here").prepend(gifDiv);
            // }
        //   });
          $(".image").on("click", function() {
            var state = $(this).attr('data-state');
            if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
        //   var state = $("#gifs-appear-here").attr("data-state");
        //   if(state === "still") {
        //     $("#gifs-appear-here").attr("src", $("#gifs-appear-here").attr("data-animate"));
        //     $("#gifs-appear-here").attr("data-state", "animate");
        //     } 
        // else {
        //     $("#gifs-appear-here").attr("src", $("#gifs-appear-here").attr("data-still"));
        //     $("#gifs-appear-here").attr("data-state", "still");
        //     } 
        });
    });
});
});
          

    // buttons display
// $("#gifButtonDisplay").append("<button type='button' onclick='searchGif")
// function displayButtons() {
//     $("#gifButtonDisplay").empty();
//     for (var i = 0; i < tvShows.length; i++);
//     var showButton = $("<button>");
//     // showButton.addClass("tvShow");
//     showButton.addClass("btn btn-primary");
//     showButton.attr("data-name",tvShows[i]);
//     showButton.text(tvShows[i]);
//     $("#gifButtonDisplay").append(showButton);
// }
    // adding a new TV Show
// function newShowButton() {
//     $("#addGif").on("click",function() {
//         var tvShow = $("#tvshow-input").val().trim();
//         if (tvShow === "") {
//             return false;
//         }
//         tvShow.push(tvShow);

//         displayButtons();
//         return false;
// });
// }

    // removing the last tv show button
// function removeButton() {
//     $("#removeGif").on("click",function() {
//     tvShows.pop(tvShows);
//     displayButtons();
//     return false;
//     });
// }
