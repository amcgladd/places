//Business Logic

function Place(place,location,landmark,time,note) {
  this.placeName = place;
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeName = time;
  this.noteName = note;
}

Place.prototype.fullName = function() {
  return this.placeName + ", " + this.locationName;
}

// user interface Logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlaceName = $("input#new-place-name").val();
    var inputtedLocationName = $("input#new-location-name").val();
    var inputtedLandmarkName = $("input#new-landmark-name").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNote = $("input#new-note").val();

    var newPlace = new Place(inputtedPlaceName, inputtedLocationName, inputtedLandmarkName, inputtedTime, inputtedNote);

    $("ul#places").append("<li><span class= 'place'>" + newPlace.fullName() + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-location-name").val("");
    $("input#new-landmark-name").val("");
    $("input#new-time").val("");
    $("input#new-note").val("");

    $(".place").last().click(function() {
    $("#show-place").show();
    $("#show-place h2").text(newPlace.placeName);
    $(".place-name").text(newPlace.placeName);
    $(".location-name").text(newPlace.locationName);
    $(".landmark-name").text(newPlace.landmarkName);
    $(".time").text(newPlace.timeName);
    $(".note").text(newPlace.noteName);
  });

  });
});
