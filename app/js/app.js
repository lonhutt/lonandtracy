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

  
  // AIzaSyBQwJs8dtan6s321eTH4mODquVYtgTk_uU

 

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
      // styles: [
      //           {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      //           {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      //           {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      //           {
      //             featureType: 'administrative.locality',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#d59563'}]
      //           },
      //           {
      //             featureType: 'poi',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#d59563'}]
      //           },
      //           {
      //             featureType: 'poi.park',
      //             elementType: 'geometry',
      //             stylers: [{color: '#263c3f'}]
      //           },
      //           {
      //             featureType: 'poi.park',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#6b9a76'}]
      //           },
      //           {
      //             featureType: 'road',
      //             elementType: 'geometry',
      //             stylers: [{color: '#38414e'}]
      //           },
      //           {
      //             featureType: 'road',
      //             elementType: 'geometry.stroke',
      //             stylers: [{color: '#212a37'}]
      //           },
      //           {
      //             featureType: 'road',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#9ca5b3'}]
      //           },
      //           {
      //             featureType: 'road.highway',
      //             elementType: 'geometry',
      //             stylers: [{color: '#746855'}]
      //           },
      //           {
      //             featureType: 'road.highway',
      //             elementType: 'geometry.stroke',
      //             stylers: [{color: '#1f2835'}]
      //           },
      //           {
      //             featureType: 'road.highway',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#f3d19c'}]
      //           },
      //           {
      //             featureType: 'transit',
      //             elementType: 'geometry',
      //             stylers: [{color: '#2f3948'}]
      //           },
      //           {
      //             featureType: 'transit.station',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#d59563'}]
      //           },
      //           {
      //             featureType: 'water',
      //             elementType: 'geometry',
      //             stylers: [{color: '#17263c'}]
      //           },
      //           {
      //             featureType: 'water',
      //             elementType: 'labels.text.fill',
      //             stylers: [{color: '#515c6d'}]
      //           },
      //           {
      //             featureType: 'water',
      //             elementType: 'labels.text.stroke',
      //             stylers: [{color: '#17263c'}]
      //           }
      //         ]
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
      content: "<div class="mapmarker">"+
          "<h3>Las Positas Vineyards</h3><hr/>"+
          "<div class="btn-toolbar">"+
            "<a href="https://www.laspositasvineyards.com/" target="_blank" class="btn btn-info" role="button">Website</a>"+
            "<a href="https://goo.gl/maps/nYfRCBEyUBw" target="_blank" class="btn btn-info pull-right" role="button">Directions</a>"+
          "</div>"+
        "</div>"
      
    });
  
    
});