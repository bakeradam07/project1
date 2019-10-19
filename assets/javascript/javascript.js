var mymap = L.map('mapId').setView([35.900019, -79.012629], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	id: 'mapbox.streets',
	accessToken: 'pk.eyJ1IjoiY2hlZmNoaW5vIiwiYSI6ImNrMXhxdG05dDBjNXczbW8zcDVsZXAza3gifQ.n7yrjPAM_yOPpOJGez6qKQ'
}).addTo(mymap);



var circle = L.circle([35.900019, -79.012629], {
	color: 'red',
	fillColor: '#f03',
	fillOpacity: 0.5,
	radius: 1000
}).addTo(mymap);

function onMapClick(e) {
	circle
        .setLatLng(e.latlng)
        circle.bindPopup("You are at " + e.latlng.toString());
		// .setContent("You clicked the map at " + e.latlng.toString())
		// .openOn(mymap);
}

mymap.on('click', onMapClick);