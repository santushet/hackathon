$(function() {
    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([12.9784, 77.6408], 15);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);

    
    // Playback options
    var playbackOptions = {
        playControl: true,
        dateControl: false,
        sliderControl: true     
    };
        
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);   
});