// An array of cities and their locations
var cities = [
  {
    state: "Alabama",
    location: [32.31823,-86.902298],
    pop_2013: "26,825",
    pop_2014: "26,145"
  },
  {
    state: "Alaska",
    location: [66.160507,-153.369141],
    pop_2013: "5,081",
    pop_2014: "6,323"
  },
  {
    state: "Arizona",
    location: [34.048927,-111.093735],
    pop_2013: "41,031",
    pop_2014: "42,136"
  },
  {
    state: "Arkansas",
    location: [34.799999,-92.199997],
    pop_2013: "14,295",
    pop_2014: "15,250"
  },
  {
    state: "California",
    location: [36.778259,-119.417931],
    pop_2013: "134,339",
    pop_2014: "134,430"
  },
  {
    state: "Colorado",
    location: [39.113014,-105.358887],
    pop_2013: "20,184",
    pop_2014: "20,469"
  },
  {
    state: "Connecticut",
    location: [41.599998,-72.699997],
    pop_2013: "17,319",
    pop_2014: "16,814"
  },
  {
    state: "Delaware",
    location: [39,-75.5],
    pop_2013: "6,798",
    pop_2014: "6,730"
  },
  {
    state: "Florida",
    location: [27.994402,-81.760254],
    pop_2013: "100,940",
    pop_2014: "100,873"
  },
  {
    state: "Georgia",
    location: [33.247875,-83.441162],
    pop_2013: "53,701",
    pop_2014: "52,719"
  },
  {
    state: "Hawaii",
    location: [19.741755,-155.844437],
    pop_2013: "5,173",
    pop_2014: "5,390"
  },
  {
    state: "Idaho",
    location: [44.068203,-114.742043],
    pop_2013: "7,219",
    pop_2014: "7,497"
  },
  {
    state: "Illinois",
    location: [40,-89],
    pop_2013: "48,653",
    pop_2014: "48,278"
  },
  {
    state: "Indiana",
    location: [40.273502,-86.126976],
    pop_2013: "28,495",
    pop_2014: "32,493"
  },
  {
    state: "Iowa",
    location: [42.032974,-93.581543],
    pop_2013: "8,707",
    pop_2014: "8,845"
  },
  {
    state: "Kansas",
    location: [38.5,-98],
    pop_2013: "9,610",
    pop_2014: "9,539"
  },
  {
    state: "Kentucky",
    location: [37.839333,-84.27002],
    pop_2013: "12,141",
    pop_2014: "12,114"
  },
  {
    state: "Louisiana",
    location: [30.39183,-92.329102],
    pop_2013: "18,794",
    pop_2014: "18,710"
  },
  {
    state: "Maine",
    location: [45.367584,-68.972168],
    pop_2013: "2,073",
    pop_2014: "2,199"
  },
  {
    state: "Maryland",
    location: [39.045753,-76.641273],
    pop_2013: "21,705",
    pop_2014: "21,266"
  },
  {
    state: "Massachusetts",
    location: [42.407211,-71.382439],
    pop_2013: "10,622",
    pop_2014: "10,447"
  },
  {
    state: "Michigan",
    location: [44.182205,-84.506836],
    pop_2013: "43,704",
    pop_2014: "43,359"
  },
  {
    state: "Minnesota",
    location: [46.39241,-94.63623],
    pop_2013: "9,391",
    pop_2014: "9,576"
  },
  {
    state: "Mississippi",
    location: [33,-90],
    pop_2013: "15,591",
    pop_2014: "13,069"
  },
  {
    state: "Missouri",
    location: [38.573936,-92.60376],
    pop_2013: "31,499",
    pop_2014: "31,903"
  },
  {
    state: "Montana",
    location: [46.96526,-109.533691],
    pop_2013: "3,125",
    pop_2014: "3,119"
  },
  {
    state: "Nebraska",
    location: [41.5,-100],
    pop_2013: "5,012",
    pop_2014: "5,228"
  },
  {
    state: "Nevada",
    location: [39.876019,-117.224121],
    pop_2013: "12,789",
    pop_2014: "12,693"
  },
  {
    state: "New Hampshire",
    location: [44,-71.5],
    pop_2013: "2,623",
    pop_2014: "2,723"
  },
  {
    state: "New Jersey",
    location: [39.833851,-74.871826],
    pop_2013: "22,263",
    pop_2014: "21,394"
  },
  {
    state: "New Mexico",
    location: [34.307144,-106.018066],
    pop_2013: "6,767",
    pop_2014: "6,948"
  },
  {
    state: "New York",
    location: [43,-75],
    pop_2013: "53,312",
    pop_2014: "52,362"
  },
  {
    state: "North Carolina",
    location: [35.782169,-80.793457],
    pop_2013: "37,176",
    pop_2014: "37,348"
  },
  {
    state: "North Dakota",
    location:[47.650589,-100.437012],
    pop_2013: "1,576",
    pop_2014: "1,696"
  },
  {
    state: "Ohio",
    location: [40.367474,-82.996216],
    pop_2013: "51,711",
    pop_2014: "51,521"
  },
  {
    state: "Oklahoma",
    location:[36.084621,-96.921387],
    pop_2013: "25,364",
    pop_2014: "26,493"
  },
  {
    state: "Oregon",
    location: [44,-120.5],
    pop_2013: "14,605",
    pop_2014: "14,492"
  },
  {
    state: "Pennsylvania",
    location: [41.203323,-77.194527],
    pop_2013: "49,971",
    pop_2014: "49,174"
  },
  {
    state: "Rhode Island",
    location: [41.700001,-71.5],
    pop_2013: "3,168",
    pop_2014: "3,133"
  },
  {
    state: "South Carolina",
    location: [33.836082,-81.163727],
    pop_2013: "21,534",
    pop_2014: "20,948"
  },
  {
    state: "South Dakota",
    location: [44.5,-100],
    pop_2013: "3,612",
    pop_2014: "3,507"
  },
  {
    state: "Tennessee",
    location: [35.860119,-86.660156],
    pop_2013: "20,758",
    pop_2014: "20,815"
  },
  {
    state: "Texas",
    location: [31,-100],
    pop_2013: "155,377",
    pop_2014: "154,247"
  },
  {
    state: "Utah",
    location: [39.41922,-111.950684],
    pop_2013: "5,382",
    pop_2014: "5,307"
  },
  {
    state: "Vermont",
    location: [44,-72.699997],
    pop_2013: "2,078",
    pop_2014: "1,979"
  },
  {
    state: "Virginia",
    location: [37.926868,-78.024902],
    pop_2013: "29,985",
    pop_2014: "30,050"
  },
  {
    state: "Washington",
    location: [47.7511, -120.7401],
    pop_2013: "17,760",
    pop_2014: "17,180"
  },
  {
    state: "West Virginia",
    location: [39,-80.5],
    pop_2013: "5,708",
    pop_2014: "5,867"
  },
  {
    state: "Wisconsin",
    location: [44.5,-89.5],
    pop_2013: "22,443",
    pop_2014: "22,572"
  },
  {
    state: "Wyoming",
    location: [43.07597,-107.290283],
    pop_2013: "2,288",
    pop_2014: "2,369"
  }
 ];

// An array which will be used to store created cityMarkers
var jailIcon = L.icon({
  iconUrl: "../Map/jail_icon.png",
  iconSize: [25, 25],
});
// var layers = {
//   jail: new L.layerGroup()
// };
var cityMarkers = [];
var marker = L.marker([cities.location], {icon: jailIcon});

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location,{icon: jailIcon}).bindPopup("<h1>" + cities[i].state + "<h1><hr><p>" + "2013 Prison Population: " + cities[i].pop_2013 + "<h1><hr><p>" + "2014 Prison Population: " + cities[i].pop_2014 +"</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers
var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

// Only one base layer can be shown at a time
var baseMaps = {
  Light: light,
  Dark: dark
};

// Overlays that may be toggled on or off
var overlayMaps = {
  Cities: cityLayer
};

// Create map object and set default layers
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 3.5,
  zoomDelta: .25,
  zoomSnap: 0,
  layers: [light, cityLayer]
  
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);




