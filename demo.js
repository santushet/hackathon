$(function() {
    // Setup leaflet map
    var map = new L.Map('map', {zoomControl:true});

    var basemapLayer = new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
		maxZoom : 16
    });

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

function onSingleClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<b>Entered the accidental zone- Zone1 <br>Speed is reducing slowly</b>" )
        .openOn(map);
}

map.on('mousedown', onSingleClick);

function onDoubleClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("<b>Exit the accidental zone- Zone1</b>" )
        .openOn(map);
}

map.on('mouseup', onDoubleClick);

    // L.circle([77.6408, 12.9784], {
    //     color: 'red',
    //     fillColor: '#f03',
    //     fillOpacity: 0.5,
    //     radius: 500
    // }).addTo(map);
        
    // Initialize playback
    var playback = new L.Playback(map, demoTracks, null, playbackOptions);   
});