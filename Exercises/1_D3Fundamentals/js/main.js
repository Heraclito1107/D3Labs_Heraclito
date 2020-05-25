/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
                                	.attr("width", 400)
                                	.attr("height", 400);

var e1 = svg.append("ellipse")
            .attr("cx", 200)
            .attr("cy", 270)
            .attr("rx", 70)
            .attr("ry", 100)
            .attr("fill", "red")

var e2 = svg.append("ellipse")
            .attr("cx", 200)
            .attr("cy", 130)
            .attr("rx", 70)
            .attr("ry", 100)
            .attr("fill", "red")

var e3 = svg.append("ellipse")
            .attr("cx", 130)
            .attr("cy", 200)
            .attr("rx", 100)
            .attr("ry", 70)
            .attr("fill", "red")

var e4 = svg.append("ellipse")
            .attr("cx", 270)
            .attr("cy", 200)
            .attr("rx", 100)
            .attr("ry", 70)
            .attr("fill", "red")

var circle = svg.append("circle")
              	.attr("cx", 200)
              	.attr("cy", 200)
              	.attr("r", 70)
              	.attr("fill", "yellow")
                .attr("style", "stroke:black");

var rect = svg.append("rect")
            	.attr("x", 10)
            	.attr("y", 10)
              .attr("rx", 10)
            	.attr("ry", 10)
            	.attr("width", 50)
            	.attr("height", 50)
            	.attr("fill","blue");

var rect2 = svg.append("rect")
            	.attr("x", 340)
            	.attr("y", 340)
              .attr("rx", 10)
            	.attr("ry", 10)
            	.attr("width", 50)
            	.attr("height", 50)
            	.attr("fill","blue");
