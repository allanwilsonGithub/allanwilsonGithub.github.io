var mymap = L.map('mapid').setView([60.179192, 24.723813], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYWxsYW53aWxzb24iLCJhIjoiY2pycnY3c245MXk4MTRicGppdjVsMmV5biJ9.xBns93DTkl5baWukq4Es9A', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

var marker1 = L.marker([60.176995, 24.729481]).addTo(mymap);
var marker2 = L.marker([60.313812, 25.113475]).addTo(mymap);

marker1.bindPopup("<b>Ski track</b><br>car park").openPopup();
marker2.bindPopup("<b>Kuusijärvi</b>").openPopup();