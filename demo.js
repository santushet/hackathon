$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([12.9784, 77.6408], 16);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    
    // Playback options
    var playbackOptions = {
        playControl: true,
        dateControl: false,
        sliderControl: true     
    };

    var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Enter/Exit the accident potential zone " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

    // L.circle([77.6408, 12.9784], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 500
    // }).addTo(map);
        
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);   
});