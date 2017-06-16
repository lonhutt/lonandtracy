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
      $("#countdown").html("Party Time!!");
    }
  }, 1000);

  
  // AIzaSyBQwJs8dtan6s321eTH4mODquVYtgTk_uU

 

    // create a LatLng object containing the coordinate for the center of the map
    var venue = new google.maps.LatLng(37.645800, -121.770499);
    var hotel = new google.maps.LatLng(37.702661, -121.816585);
    var sfo = new google.maps.LatLng(37.615501, -122.389489);
    var sjc = new google.maps.LatLng(37.369581, -121.929800);
    var oak = new google.maps.LatLng(37.713241, -122.212191);
    var brunch = new google.maps.LatLng(37.903204, -121.728903);
    var center = new google.maps.LatLng(37.651494, -122.014554);

    // prepare the map properties
    var options = {
      zoom: 10,
      center: center,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      navigationControl: true,
      mapTypeControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true,
      styles: [
        {
          "featureType": "administrative.locality",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        }
      ]
      // styles: [
      //   {
      //     featureType: "landscape",
      //     elementType: "labels",
      //     stylers: [{visibility: "off"}]
      //   }
      // ]
      
    };

    // initialize the map object
    var map = new google.maps.Map(document.getElementById('google_map'), options);
    
    // add Marker
    var venueMarker = new google.maps.Marker({
      position: venue, 
      label: 'Venue',
      animation: google.maps.Animation.DROP,
      map: map
    });

    var hotelMarker = new google.maps.Marker({
      position: hotel, 
      label: 'Hotel',
      animation: google.maps.Animation.DROP,
      map: map
    });

    var sfoMarker = new google.maps.Marker({
      position: sfo, 
      label: 'SFO',
      animation: google.maps.Animation.DROP,
      map: map
    });

    var sjcMarker = new google.maps.Marker({
      position: sjc, 
      label: 'SJC',
      animation: google.maps.Animation.DROP,
      map: map
    });

    var oakMarker = new google.maps.Marker({
      position: oak, 
      label: 'OAK',
      animation: google.maps.Animation.DROP,
      map: map
    });

    var brunchMarker = new google.maps.Marker({
      position: brunch, 
      label: 'Brunch',
      animation: google.maps.Animation.DROP,
      map: map
    });


    // add information window
    var venueWindow = new google.maps.InfoWindow({
      content: '<div class="mapmarker">'+
          '<h3>Las Positas Vineyards</h3><hr/>'+
          '<div class="btn-toolbar">'+
            '<a href="https://www.laspositasvineyards.com/" target="_blank" rel="noopener" class="btn btn-info" role="button">Website</a>'+
            '<a href="https://goo.gl/maps/KrEmgrbisms" target="_blank" rel="noopener" class="btn btn-info pull-right" role="button">Open in Maps</a>'+
          '</div>'+
        '</div>'
      
    });

    // add information window
    var hotelWindow = new google.maps.InfoWindow({
      content: '<div class="mapmarker">'+
          '<h3>Hampton Inn</h3><hr/>'+
          '<div class="btn-toolbar">'+
            '<a href="http://www.staylivermore.com" target="_blank" rel="noopener" class="btn btn-info" role="button">Website</a>'+
            '<a href="https://goo.gl/maps/LZtp4cK2YUr" target="_blank" rel="noopener" class="btn btn-info pull-right" role="button">Open in Maps</a>'+
          '</div>'+
        '</div>'
      
    });

    // add information window
    var sfoWindow = new google.maps.InfoWindow({
      content: '<div class="mapmarker">'+
          '<h3>SF Airport</h3><hr/>'+
          '<div class="btn-toolbar">'+
            '<a href="https://goo.gl/maps/BmvzbppDdGH2" target="_blank" rel="noopener" class="btn btn-info" role="button">Directions to Hotel</a>'+
            '<a href="https://goo.gl/maps/QJf46EDV9Fo" target="_blank" rel="noopener" class="btn btn-info pull-right" role="button">Directions to Venue</a>'+
          '</div>'+
        '</div>'
      
    });

    // add information window
    var sjcWindow = new google.maps.InfoWindow({
      content: '<div class="mapmarker">'+
          '<h3>San Jose Airport</h3><hr/>'+
          '<div class="btn-toolbar">'+
            '<a href="https://goo.gl/maps/SXgdwP1QaP52" target="_blank" rel="noopener" class="btn btn-info" role="button">Directions to Hotel</a>'+
            '<a href="https://goo.gl/maps/7tSXgY5aSF12" target="_blank" rel="noopener" class="btn btn-info pull-right" role="button">Directions to Venue</a>'+
          '</div>'+
        '</div>'
      
    });

    // add information window
    var oakWindow = new google.maps.InfoWindow({
      content: '<div class="mapmarker">'+
          '<h3>Oakland Airport</h3><hr/>'+
          '<div class="btn-toolbar">'+
            '<a href="https://goo.gl/maps/xmXNtusiRey" target="_blank" rel="noopener" class="btn btn-info" role="button">Directions to Hotel</a>'+
            '<a href="https://goo.gl/maps/qb92chA2chT2" target="_blank" rel="noopener" class="btn btn-info pull-right" role="button">Directions to Venue</a>'+
          '</div>'+
        '</div>'
      
    });

    // add information window
    var brunchWindow = new google.maps.InfoWindow({
      content: '<div class="mapmarker">'+
          '<h3>Godfrey Residence</h3><hr/>'+
          '<div class="btn-toolbar">'+
            '<a href="https://goo.gl/maps/HNdh7LQQmn42" target="_blank" rel="noopener" class="btn btn-info" role="button">Directions from Hotel</a>'+
          '</div>'+
        '</div>'
      
    });

    // add listener for a click on the pin
    google.maps.event.addListener(venueMarker, 'click', function() {
      venueWindow.open(map, venueMarker);
    });

    google.maps.event.addListener(hotelMarker, 'click', function() {
      hotelWindow.open(map, hotelMarker);
    });

    google.maps.event.addListener(sfoMarker, 'click', function() {
      sfoWindow.open(map, sfoMarker);
    });

    google.maps.event.addListener(sjcMarker, 'click', function() {
      sjcWindow.open(map, sjcMarker);
    });

    google.maps.event.addListener(oakMarker, 'click', function() {
      oakWindow.open(map, oakMarker);
    });

    google.maps.event.addListener(brunchMarker, 'click', function() {
      brunchWindow.open(map, brunchMarker);
    });
    

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    var $grid = $('.grid').masonry({
      itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
    
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });
    
});