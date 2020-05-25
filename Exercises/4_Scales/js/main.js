/*
*    main.js
*/
var svg = d3.select("#chart-area").append("svg")
                                	.attr("width", 500)
                                	.attr("height", 500);


var y = d3.scaleLinear()
        	.domain([0, 830])
        	.range([0,400]);

d3.json("data/buildings.json").then((data)=> {
  	data.forEach((d)=>{
  		d.height = +d.height;
  	});
    console.log(data);
    var names = data.map((d) => { return d.name; }) ;
    console.log(names);
    var x = d3.scaleBand()
            	.domain(names)
            	.range([0,400])
            	.paddingInner(0.3)
            	.paddingOuter(0.3);

    var color = d3.scaleOrdinal()
                    .domain(names)
                    .range(d3.schemeSet3);

    var rects = svg.selectAll("rect")
                    .data(data)
    rects.enter()
         .append("rect")
             .attr("x", (d) =>{return x(d.name)})
             .attr("y", (d)=>{return 500 - y(d.height)})
             .attr("width", x.bandwidth())
             .attr("height", (d)=>{return y(d.height)})
             .attr("style", "stroke:black")
             .attr("fill",(d)=>{return color(d.name)});

    }).catch((error)=>{
      console.log(error)
    });
