// $(function() {

//   new WOW().init();

//   var countDownDate = new Date("Oct 6, 2017 17:30:00").getTime();

//   // Update the count down every 1 second
//   var x = setInterval(function() {

//     // Get todays date and time
//     var now = new Date().getTime();

//     // Find the distance between now an the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     $("#countdown").html(days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ");

//     // If the count down is finished, write some text 
//     if (distance < 0) {
//       clearInterval(x);
//       $("#countdown").html("EXPIRED");
//     }
//   }, 1000);

// });

$(function() {

  var countDownDate = new Date("Oct 6, 2017 17:30:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    $("#countdown").html(days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ");

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      $("#countdown").html("EXPIRED");
    }
  }, 1000);

  // create a LatLng object containing the coordinate for the center of the map
  var latlng = new google.maps.LatLng(37.646205, -121.770155);
  // prepare the map properties
  var options = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    navigationControl: true,
    mapTypeControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true
  };
  // initialize the map object
  var map = new google.maps.Map(document.getElementById('google_map'), options);
  // var map2 = new google.maps.Map(document.getElementById('google_map2'), options);
  // add Marker
  var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });
  // add listener for a click on the pin
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });
  // add information window
  var infowindow = new google.maps.InfoWindow({
    content:  `
      <div class="mapmarker">
        <h3>Las Positas Vineyards</h3><hr/>
        <div class="btn-toolbar">
          <a href="https://www.laspositasvineyards.com/" target="_blank" class="btn btn-info" role="button">Website</a>
          <a href="https://goo.gl/maps/nYfRCBEyUBw" target="_blank" class="btn btn-info pull-right" role="button">Directions</a>
        </div>

        
      </div>
    `
  });  
});