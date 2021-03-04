var svgWidth = 800;
var svgHeight = 600;

var margin = {
  top: 20,
  right: 40,
  bottom: 100,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

  
// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "fed_releases";
var chosenYAxis = "fed_admissions";

// function used for updating x-scale var upon click on axis label
function xScale(admissionsData, chosenXAxis) {
  // create scales
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(admissionsData, d => d[chosenXAxis]) * .8,
      d3.max(admissionsData, d => d[chosenXAxis]) * 1
    ])
    .range([0, width]);

  return xLinearScale;

}
function yScale(admissionsData, chosenYAxis) {
    // create scales
    var yLinearScale = d3.scaleLinear()
      .domain([d3.min(admissionsData, d => d[chosenYAxis]) * 0.8,
        d3.max(admissionsData, d => d[chosenYAxis]) * 1.05
      ])
      .range([height, 0]);
  
    return yLinearScale;
  
  }

// function used for updating xAxis var upon click on axis label
function renderXAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}
// function used for updating yAxis var upon click on axis label
function renderYAxes(newYScale, yAxis) {
    var leftAxis = d3.axisLeft(newYScale);
  
    yAxis.transition()
      .duration(1000)
      .call(leftAxis);
  
    return yAxis;
  }

// function used for updating the circles location and x axix scale 
// with a transition to selected label data
function renderXCircles(circlesGroup, newXScale, chosenXAxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// function used for updating the circles location and y axix scale 
// with a transition to selected label data
function renderYCircles(circlesGroup, newYScale, chosenYAxis) {

    circlesGroup.transition()
      .duration(1000)
      .attr("cy", d => newYScale(d[chosenYAxis]));
  
    return circlesGroup;
}

// function used for updating the state abbreviation data location on the  
// x axis with a transition to selected label data
function renderXCirclesText(TextGroup, newXScale, chosenXAxis) {

    TextGroup.transition()
      .duration(1000)
      .attr("x", d => newXScale(d[chosenXAxis]));
  
    return TextGroup;
  }
// function used for updating the state abbreviation text data location on the  
// y axis with a transition to selected label data
function renderYCirclesText(TextGroup, newYScale, chosenYAxis) {

    TextGroup.transition()
      .duration(1000)
      .attr("y", d => newYScale(d[chosenYAxis]));
  
    return TextGroup;
}
// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, chosenYAxis, circlesGroup) {

  var labelx;
  var labely;
  var labelposition = [80, -60]

  if (chosenXAxis === "fed_releases") {
    labelx = "Federal Releases:";
    // leave alone
  }
  else if (chosenXAxis === "fed_admissions") {
    labelx = "Federal Admissions:";
    labelposition = [80, -60];
  }
  else {
      labelx = "State Releases";
      labelposition = [80, -60];
  }
  if (chosenYAxis === "fed_admissions") {
    labely = "Federal Admissions: "; 
    // leave alone
  }
  else if (chosenYAxis === "state_admissions") {
    labely = "State Admissions:";
  }
  else {
      labely = "Federal Admissions";
  }


  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset(labelposition)
    .html(function(d) {
      return (`${d.year}<br>${labelx} ${d[chosenXAxis]}<br>${labely} ${d[chosenYAxis]}`);
    });

  circlesGroup.call(toolTip);

  // on mouseover event to highlight the chart circle selected
  circlesGroup.on("mouseover", function(data) {
    d3.select(this)
      .transition()
      .duration(600)
      .attr("r", 20)
      toolTip.show(data, this);
  })
    // onmouseout event
    .on("mouseout", function(data, index) {
      d3.select(this)
          .transition()
          .duration(600)
          .attr("r", 12)
      toolTip.hide(data);
    });

  return circlesGroup;
}

// Retrieve data from the CSV file and execute everything below
d3.csv("assets/js/admissions.csv").then(function(admissionsData) {

  // parse data
  admissionsData.forEach(function(data) {
    data.fed_releases = +data.fed_releases;
    data.state_releases = +data.state_releases;
    // data.income = +data.income;
    data.fed_admissions = +data.fed_admissions;
    data.state_admissions = +data.state_admissions;
    // data.healthcare = +data.healthcare;
  });

  // xLinearScale and yLinearScale functions from above 
  var xLinearScale = xScale(admissionsData, chosenXAxis);
  var yLinearScale = yScale(admissionsData, chosenYAxis);

  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  var yAxis = chartGroup.append("g")
    .call(leftAxis);

  // append initial circles
  var dataCircles = chartGroup.selectAll("circlesGroup")
    .data(admissionsData)
    .enter()
    var circlesGroup = dataCircles
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d[chosenYAxis]))
    .attr("r", "12")
    .attr("fill", "lightblue")
    .attr("opacity", ".6")
    .classed("yearCircle", true);

  // append initial circles text
  var TextGroup= dataCircles
    .append("text")
    .attr("text-anchor", "middle")
    .attr("font-size", "10px")
    .text(d => d.year)
    .attr("x", d => xLinearScale(d[chosenXAxis]))
    .attr("y", d => yLinearScale(d[chosenYAxis]))
    .style("fill", "black")
    .attr("opacity", ".7")
    .classed("yearText", true);

  // Create group for the 3 x-axis labels
  var xlabelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var fedreleasesLabel = xlabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "fed_releases") // value to grab for event listener
    .classed("active", true)
    .text("Federal Releases");

  var ageLabel = xlabelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "state_releases") // value to grab for event listener
    .classed("inactive", true)
    .text("State Releases");

  // var incomeLabel = xlabelsGroup.append("text")
  //   .attr("x", 0)
  //   .attr("y", 60)
  //   .attr("value", "income") // value to grab for event listener
  //   .classed("inactive", true)
  //   .text("Household Income (Median)");
  
  // Create group for the 3 y-axis labels
  var ylabelsGroup = chartGroup.append("g")
  .attr("transform", "rotate(-90)")

  var obeseLabel = ylabelsGroup.append("text")
    .attr("y", 10 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("value", "federal_admissions") // value to grab for event listener
    .classed("inactive", true)
    .text("Federal Admissions");

  var smokesLabel = ylabelsGroup.append("text")
    .attr("y", 30 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .attr("value", "state_admissions") // value to grab for event listener
    .classed("inactive", true)
    .text("State Admissions");

  // var healthcareLabel = ylabelsGroup.append("text")
  //   .attr("y", 50 - margin.left)
  //   .attr("x", 0 - (height / 2))
  //   .attr("dy", "1em")
  //   .attr("value", "healthcare") // value to grab for event listener
  //   .classed("active", true)
  //   .text("Lacks Healthcare (%)");

  // updateToolTip function above csv import
  var circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

  // x axis labels event listener
  xlabelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== chosenXAxis) {

        // replaces chosenXAxis with value
        chosenXAxis = value;

        // console.log(chosenXAxis)

        // functions here found above csv import
        // updates x scale for new data
        xLinearScale = xScale(admissionsData, chosenXAxis);

        // updates x axis with transition
        xAxis = renderXAxes(xLinearScale, xAxis);

        // updates circles with new x values
        circlesGroup = renderXCircles(circlesGroup, xLinearScale, chosenXAxis);
        TextGroup = renderXCirclesText(TextGroup, xLinearScale, chosenXAxis);
        
        // updates tooltips with new info based on x axis selection
        circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

        // changes classes to change bold text
        if (chosenXAxis === "Federal Releases") {
          fedreleasesLabel
            .classed("active", true)
            .classed("inactive", false);
          ageLabel
            .classed("active", false)
            .classed("inactive", true);
          incomeLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else if (chosenXAxis === "age") {
          fedreleasesLabel
            .classed("active", false)
            .classed("inactive", true);
          ageLabel
            .classed("active", true)
            .classed("inactive", false);
          incomeLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else {
          fedreleasesLabel
            .classed("active", false)
            .classed("inactive", true);
          ageLabel
            .classed("active", false)
            .classed("inactive", true);
          // incomeLabel
          //   .classed("active", true)
          //   .classed("inactive", false);
        }
      }
    });
    // y axis labels event listener
  ylabelsGroup.selectAll("text")
  .on("click", function() {
    // get value of selection
    var value = d3.select(this).attr("value");
    if (value !== chosenYAxis) {

      // replaces chosenYAxis with value
      chosenYAxis = value;

      // console.log(chosenYAxis)

      // functions here found above csv import
      // updates y scale for new data
      yLinearScale = yScale(admissionsData, chosenYAxis);

      // updates y axis with transition
      yAxis = renderYAxes(yLinearScale, yAxis);
      TextGroup = renderYCirclesText(TextGroup, yLinearScale, chosenYAxis)
      // updates circles with new y values
      circlesGroup = renderYCircles(circlesGroup, yLinearScale, chosenYAxis);

      // updates tooltips with new info based on y axis selection
      circlesGroup = updateToolTip(chosenXAxis, chosenYAxis, circlesGroup);

      // changes classes to change bold text
      if (chosenYAxis === "Admissions") {
       obeseLabel
          .classed("active", true)
          .classed("inactive", false);
        smokesLabel
          .classed("active", false)
          .classed("inactive", true);
        healthcareLabel
          .classed("active", false)
          .classed("inactive", true);
      }
      else if (chosenYAxis === "fed_admissions") {
        obeseLabel
          .classed("active", false)
          .classed("inactive", true);
        smokesLabel
          .classed("active", true)
          .classed("inactive", false);
        healthcareLabel
          .classed("active", false)
          .classed("inactive", true);
      }
      else {
        obeseLabel
          .classed("active", false)
          .classed("inactive", true);
        smokesLabel
          .classed("active", false)
          .classed("inactive", true);
        healthcareLabel
          .classed("active", true)
          .classed("inactive", false);
      }
    }
  });
}).catch(function(error) {
  console.log(error);
});

