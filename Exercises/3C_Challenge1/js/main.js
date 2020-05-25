/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
                                	.attr("width", 700)
                                	.attr("height", 850);

d3.json("data/buildings.json").then((data)=> { //d3.json("data/agees.json").then((data)=> { //error line
  	data.forEach((d)=>{
  		d.height = +d.height;
  	});
    console.log(data)
    var rects = svg.selectAll("rect")
                    .data(data)
    rects.enter()
         .append("rect")
             .attr("x", (d, i) =>{return 50+i*60})
             .attr("y", (d)=>{return 850-d.height})
             .attr("width", 50)
             .attr("height", (d)=>{return d.height})
             .attr("style", "stroke:black")
             .attr("fill",(d, i)=>{if(i%2 == 0){return "darkred"}; return "indianred"});

    }).catch((error)=>{
      console.log(error)
    });
