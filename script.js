// This isn't necessary but it keeps the editor from thinking L is a typo
/* global L */

// var tileLink = 'https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png';
// var tileLink = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}';
var tileLink = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png';

var mapOptions = {
  // dragging: false,
  zoomDelta: 0.25,
  inertiaDeceleration: 1
};

var map = L.map('map', mapOptions).setView([38.500893,-98.745117], 5);

// Add base layer
L.tileLayer(tileLink, {
  maxZoom: 18
}).addTo(map);

var div = L.DomUtil.create('div', 'issInfo');
console.log('Create div');
console.log(div);
div.innerHTML = '<div class="about">ISS Location Info</div>';
