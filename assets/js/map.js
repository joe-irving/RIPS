var prisonMap = L.map("prison-map",{
                    center: [10,0],
                    crs: L.CRS.EPSG3857,
                    zoom: 2,
                    zoomControl: true,
                    preferCanvas: false
                });

var titleLayer = L.tileLayer(
  "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}",
  {
    "attribution": '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    "detectRetina": false,
    "maxNativeZoom": 20,
    "maxZoom": 20,
    "minZoom": 2,
    "noWrap": false,
    "opacity": 1,
    // "updateWhenZooming": false,
    // "updateWhenIdle": true,
    // "subdomains": "abc",
    "tms": false,
    "ext": "png"

  }
).addTo(prisonMap);

function getBounds(prisons){
  lats = prisons.map(p => p.lat);
  lngs = prisons.map(p => p.lng);
  bounds = [
    [Math.max(...lats), Math.max(...lngs)],
    [Math.min(...lats), Math.min(...lngs)],
  ]
  return bounds
}

function buildMap(){
  console.log(prisons);
  for (i in prisons){
    var newMarker = L.marker([prisons[i]['lat'],prisons[i]['lng']]);
    var popupText = "<a href='"+prisons[i]["url"]+"'>"+prisons[i]["title"]+"</a>"
    for (r in prisons[i].rebels){
      if (r == 0){
        popupText += "<ul>"
      }
      popupText += "<li><a href='"+prisons[i]['rebels'][r]["url"]+"'>"+prisons[i]['rebels'][r]["title"]+"</a>"
      if (r == (prisons[i].rebels.length -1)){
        popupText += "</ul>"
      }
    }
    newMarker.bindPopup(popupText);
    newMarker.addTo(prisonMap);
  }
  prisonMap.fitBounds(getBounds(prisons));
}

buildMap();
