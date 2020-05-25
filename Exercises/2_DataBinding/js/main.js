/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
                                	.attr("width", 400)
                                	.attr("height", 400);


var data = [25, 20, 15, 10, 5];

var rects = svg.selectAll("rect")
               .data(data);

rects.enter()
     .append("rect")
         .attr("x", (d, i) =>{return 120+i*50})
         .attr("y", (d)=>{return 200-d})
         .attr("width", 40)
         .attr("height", (d)=>{return d})
         .attr("style", "stroke:black")
         .attr("fill","darkred");
