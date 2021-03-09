// Create an array of each country's numbers
var gender13 = Object.values(data.gender13);
var gender14 = Object.values(data.gender14);
var crime13 = Object.values(data.crime13);
var crime14 = Object.values(data.crime14);

// Create an array of music provider labels
var labels = Object.keys(data.gender13, data.crime13);

// Display the default plot
function init() {
  var data = [{
    values: gender13,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("pie", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  var data = [];

  if (dataset == 'gender13') {
      data = gender13;
  }
  else if (dataset == 'gender14') {
      data = gender14;
  }
  else if (dataset == 'crime13') {
      data = crime13;
  }
  else if (dataset == 'crime14') {
    data = crime14;
}
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();