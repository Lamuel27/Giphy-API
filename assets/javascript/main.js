$(document).ready(function() {
    // my array of tv shows
var tvShows = ["Breaking Bad","The Simpsons","The League","The Office","Parks and Recreation","Rick and Morty","Family Guy","Silicon Valley","Malcolm in the Middle"];

    // buttons display

function displayButtons() {
    $("#gifButtonDisplay").empty();
    for (var i = 0; i < tvShows.length; i++);
    var showButton = $("<button>");
    showButton.addClass("tvShow");
    showButton.addClass("btn btn-primary");
    showButton.attr("data-name",tvShows[i]);
    showButton.text(tvShows[i]);
    $("#gifButtonDisplay").append(showButton);
}
    // adding a new TV Show
function newShowButton() {
    $("#addGif").on("click",function() {
        var tvShow = $("#tvshow-input").val().trim();
        if (tvShow === "") {
            return false;
        }
        tvShow.push(tvShow);

        displayButtons();
        return false;
});
}

    // removing the last tv show button
function removeButton() {
    $("#removeGif").on("click",function() {
    tvShows.pop(tvShows);
    displayButtons();
    return false;
    });
}
});
