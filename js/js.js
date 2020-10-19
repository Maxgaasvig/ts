let tommelop = document.getElementById("tommelop");


function btnTilmeld() {
    location.href = "tilmeld.html"
}



function btnDeltager() {
    location.href = "deltager.html"
}

function btnOversigt() {
    location.href = "oversigt.html"
}

function btnSkridt() {
    location.href = "skridt.html"

}

function showImage() {
    tommelop.style.display = "block";
    tommelop.play();
}






mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtaWxsYWI5OCIsImEiOiJja2Zxa2VkeTcwdnltMnBsaDRzbnhtcjIyIn0.0f6fxuXkrn_KJAU0rgUymA';
var brabrand= [10.092, 56.145];
var fod = [10.102, 56.146];
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/camillab98/ckgalwpv7173b19qq0d69j0rr',
    center: brabrand
   ,
    zoom: 13
});

// create the popup
var popup = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Brabrand Sø er et fantastisk område, hvor du kan opleve dyreliv, natur mens du går en tur rundt om søen. Gåturen rundt om søen er 10 km.'
);

// create the popup
var popup2 = new mapboxgl.Popup({
    offset: 25
}).setText(
    'Oplev Årslev Engsø fredet område. Gåturen rundt om søen er 8 km i smuk natur.'
);


// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';



new mapboxgl.Marker()
    .setLngLat([10.125, 56.146])
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);



new mapboxgl.Marker()
    .setLngLat([10.080, 56.146])
    .setPopup(popup2) // sets a popup on this marker
    .addTo(map);
