var prisonMap = L.map("prison-map",{
                    center: [10,0],
                    crs: L.CRS.EPSG3857,
                    zoom: 2,
                    zoomControl: true,
                    preferCanvas: false
                });

var titleLayer = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg",
  {
    "attribution": "Map tiles by \u003ca href=\"http://stamen.com\"\u003eStamen Design\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by/3.0\"\u003eCC BY 3.0\u003c/a\u003e. Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://creativecommons.org/licenses/by-sa/3.0\"\u003eCC BY SA\u003c/a\u003e.",
    "detectRetina": false,
    "maxNativeZoom": 18,
    "maxZoom": 18,
    "minZoom": 2,
    "noWrap": false,
    "opacity": 1,
    // "updateWhenZooming": false,
    // "updateWhenIdle": true,
    // "subdomains": "abc",
    "tms": false,

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
