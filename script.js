// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

// Links to various basemaps
// var tileLink = 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png';
// var tileLink = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}';
var tileLink = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

// Links to astronaut and ISS location information
var astrosLink = 'http://api.open-notify.org/astros.json';
var issNowLink = 'http://api.open-notify.org/iss-now.json';

// Global variables
var astrosHTML;
var issNowX;
var issNowY;
var issNowHTML;

// Initial Leaflet map options
var mapOptions = {
  // dragging: false,
  zoomDelta: 0.25,
  inertiaDeceleration: 1,
  zoomControl: false
};

// Initialize Leaflet map
var map = L.map('map', mapOptions).setView([38.500893,-98.745117], 3);

// Add Zoom control at top right of page
L.control.zoom({position: 'topright'}).addTo(map);

// Add base layer
L.tileLayer(tileLink, {
  maxZoom: 18
}).addTo(map);

// var div = L.DomUtil.create('div', 'issInfo', #issInfoContainer);
// console.log('Create div');
// console.log(div);
// div.innerHTML = '<div class="about">ISS Location Info</div>';

// Fetch astronaut data
fetch(astrosLink)
  .then(function (response) {
    // Read data as JSON
    return response.json();
  })
  .then(function (data) {
    // Create the Leaflet layer for the data
    // console.log(data);

    // Set global data variables
    astrosHTML = '<p>' + data['number'] + '</p>';
    console.log(astrosHTML);
  });


var el = document.getElementById('issInfoContainer');
el.innerHTML += 'ISS Location Info';
el.innerHTML += astrosHTML;
