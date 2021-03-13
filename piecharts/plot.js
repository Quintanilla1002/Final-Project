// Create an array of each country's numbers
var race13 = Object.values(data.race13);
var race14 = Object.values(data.race14);
var crime13 = Object.values(data.crime13);
var crime14 = Object.values(data.crime14);

// Create an array of music provider labels
var labels1 = Object.keys(data.race13);
var labels2 = Object.keys(data.crime13);
console.log(labels1)
console.log(labels2)
// Display the default plot
function init() {
  var data = [{
    values: race13,
    labels: labels1,
    type: "pie"
  }];

  var layout = {
    height: 400,
    width: 500,
    postition: "center",
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
  var data = [race13, crime13];
 console.log(dataset)
 var labels = ""
  if (dataset == 'race13') {
      data = race13;
      labels = labels1;
  }
  else if (dataset == 'race14') {
      data = race14;
      labels = labels1;
  }
  else if (dataset == 'crime13') {
      data = crime13;
      labels = labels2;
  }
  else if (dataset == 'crime14') {
    data = crime14;
    labels = labels2;
}
  // Call function to update the chart
  updatePlotly(data, labels);
}

// Update the restyled plot's values
function updatePlotly(newdata, labels) {
  // Plotly.restyle("pie", "values", [newdata]);
  var data = [{
    values: newdata,
    labels: labels,
    type: "pie"
  }];

  var layout = {
    height: 400,
    width: 500,
    postition: "middlecenter",
  };
  Plotly.newPlot("pie", data, layout);
}

init();